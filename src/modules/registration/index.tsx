import {gql} from '@apollo/client';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import {
  LeagueStatus,
  useAllTeamsQuery,
  useLeagueRegistrationQuery,
  useRegisterMutation,
} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {Formik, FormikErrors, useFormikContext} from 'formik';
import {useRouter} from 'next/router';
import React, {useCallback, useState} from 'react';
import {useEffect} from 'react';
import {SuperbowlTeamOptions} from '../forms/SuperbowlTeamOptions';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';
import {AlreadyExistingUserModal} from './AlreadyExistingUserModal';
import {RegistrationFormType} from './types';

export type RegistrationFormProps = {
  leagueCode: string;
};

const LeagueRegistrationQuery = gql`
  query LeagueRegistration($leagueCode: String!) {
    league(where: {share_code: $leagueCode}) {
      id
      share_code
      name
      status
      reminder_policy
      late_policy
      pick_policy
      scoring_type
      viewer {
        id
        membership_id
      }
      superbowl_competition
      _count {
        leaguemembers
      }
      rules {
        id
        name
        description
      }
      priorLeague {
        id
        leaguemembers {
          id
          people {
            id
            username
            email
            uid
          }
        }
      }
    }
    teams {
      id
      abbrev
      conference
      teamid
      loc
      name
    }
  }
`;

export function LeagueRegistration({leagueCode}: RegistrationFormProps) {
  const {data, loading} = useLeagueRegistrationQuery({variables: {leagueCode}});
  const [register] = useRegisterMutation();
  const {data: teams} = useAllTeamsQuery();
  const user = useUser();
  const league = data?.league;
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const onModalClose = useCallback(() => {
    setModalOpen(false);
    router.push('/');
  }, [router, setModalOpen]);

  useEffect(() => {
    if (!loading && router.isReady && !league) {
      router.push('/');
    } else if (!user) {
      router.push({
        pathname: `/login`,
        query: {
          redirectTo: router.asPath,
          banner: 'registration',
        },
      });
    }
  }, [league, router, loading, user]);

  if (loading || !league || !user || !teams) {
    return <FuntimeLoading />;
  }

  if (league.status !== LeagueStatus.NotStarted) {
    return <Typography.H3>The league has started, you cannot register anymore.</Typography.H3>;
  }

  const priorMember = league.priorLeague?.leaguemembers.find(m => m.people.email === user.email);

  return (
    <>
      {Boolean(league.viewer?.membership_id) && (
        <AlreadyExistingUserModal leagueName={league.name} />
      )}
      <Flex w="100%" justify="center">
        <Flex maxW="xl" justify="center" layerStyle="funtime-z1">
          <Stack dir="column" gap="16px" divider={<Divider />} direction="column" w="100%">
            <Typography.H1 textAlign="center">Register for {league.name}</Typography.H1>
            <Flex direction="column">
              <Typography.H3 textAlign="center">League Rules</Typography.H3>
              <Box pt="16px" />
              <Grid templateColumns="repeat(5, 1fr)" columnGap="4px" rowGap="20px">
                {league.rules.map(({id, name, description}) => {
                  return (
                    <React.Fragment key={id}>
                      <GridItem colSpan={{base: 5, md: 2}}>
                        <Typography.Body1 fontWeight="bold">{name}</Typography.Body1>
                      </GridItem>
                      <GridItem colSpan={{base: 5, md: 3}} colStart={{base: 1, md: 3}}>
                        <Typography.Body1>{description}</Typography.Body1>
                      </GridItem>
                    </React.Fragment>
                  );
                })}
              </Grid>
              <Divider my="16px" />
              <Formik<RegistrationFormType>
                initialValues={{
                  username: priorMember ? priorMember.people.username : '',
                  superbowlLoserTeamId: undefined,
                  superbowlWinnerTeamId: undefined,
                  superbowlTotalScore: '',
                }}
                validateOnMount={true}
                validate={async values => {
                  const {
                    username,
                    superbowlLoserTeamId,
                    superbowlWinnerTeamId,
                    superbowlTotalScore,
                  } = values;
                  const errors: FormikErrors<RegistrationFormType> = {};
                  if (!username) {
                    errors['username'] = 'Please enter a valid username';
                  }
                  if (!superbowlWinnerTeamId) {
                    errors['superbowlWinnerTeamId'] = 'Please enter a Super Bowl winner';
                  }
                  if (!superbowlLoserTeamId) {
                    errors['superbowlLoserTeamId'] = 'Please enter a Super Bowl loser';
                  }
                  const scoreError = 'Please enter a valid total score for the Super Bowl';
                  if (!superbowlTotalScore || !Number(superbowlTotalScore)) {
                    errors['superbowlTotalScore'] = scoreError;
                  }
                  const winnerTeam = teams.teams.find(
                    t => t.teamid === Number(superbowlWinnerTeamId)
                  );
                  const loserTeam = teams.teams.find(
                    t => t.teamid === Number(superbowlLoserTeamId)
                  );
                  if (winnerTeam && loserTeam && winnerTeam.conference === loserTeam.conference) {
                    errors[
                      'superbowlWinnerTeamId'
                    ] = `You cannot choose teams in the same conference for winner/loser (${winnerTeam.conference})`;
                  }
                  return errors;
                }}
                onSubmit={async values => {
                  const {
                    username,
                    superbowlLoserTeamId: superbowlLoserTeamIdRaw,
                    superbowlTotalScore: superbowlTotalScoreRaw,
                    superbowlWinnerTeamId: superbowlWinnerTeamIdRaw,
                  } = values;

                  const superbowlLoserTeamId = parseInt(superbowlLoserTeamIdRaw ?? '');
                  const superbowlWinnerTeamId = parseInt(superbowlWinnerTeamIdRaw ?? ''); // intentionally throw if fails
                  const superbowlTotalScore =
                    typeof superbowlTotalScoreRaw === 'number'
                      ? superbowlTotalScoreRaw
                      : parseInt(superbowlTotalScoreRaw ?? ''); // intentionally throw if fails

                  await register({
                    variables: {
                      leagueCode,
                      superbowlLoser: superbowlLoserTeamId,
                      superbowlWinner: superbowlWinnerTeamId,
                      superbowlScore: superbowlTotalScore,
                      username,
                    },
                  });
                  setModalOpen(true);
                }}
              >
                {formik => {
                  return (
                    <Flex direction="column" gap="12px">
                      <Flex w="100%">
                        <FormControl>
                          <FormLabel>Username</FormLabel>
                          <Input
                            variant="outline"
                            value={formik.values.username}
                            name="username"
                            onChange={formik.handleChange}
                          />
                        </FormControl>
                      </Flex>
                      <Flex w="100%">
                        <Tooltip
                          placement="top-start"
                          label={`To use an email other than ${user.email}, please sign out in the top right and log in with a different email.`}
                        >
                          <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input disabled variant="outline" value={user.email} />
                          </FormControl>
                        </Tooltip>
                      </Flex>
                      <Flex w="100%">
                        <FormControl>
                          <FormLabel>Super Bowl Winner</FormLabel>
                          <Select
                            variant="outline"
                            value={formik.values.superbowlWinnerTeamId}
                            name="superbowlWinnerTeamId"
                            onChange={formik.handleChange}
                          >
                            <SuperbowlTeamOptions />
                          </Select>
                        </FormControl>
                      </Flex>
                      <Flex w="100%">
                        <FormControl>
                          <FormLabel>Super Bowl Loser</FormLabel>
                          <Select
                            variant="outline"
                            value={formik.values.superbowlLoserTeamId}
                            name="superbowlLoserTeamId"
                            onChange={formik.handleChange}
                          >
                            <SuperbowlTeamOptions />
                          </Select>
                        </FormControl>
                      </Flex>
                      <Flex w="100%">
                        <FormControl>
                          <FormLabel>Super Bowl Total Score</FormLabel>
                          <Input
                            type="number"
                            min={1}
                            max={150}
                            variant="outline"
                            value={formik.values.superbowlTotalScore}
                            name="superbowlTotalScore"
                            onChange={formik.handleChange}
                          />
                        </FormControl>
                      </Flex>
                      <Box />
                      <Flex w="100%">
                        {Object.values(formik.errors).length > 0 ? (
                          <Tooltip label={Object.values(formik.errors).find(Boolean)}>
                            <RegisterButton />
                          </Tooltip>
                        ) : (
                          <RegisterButton />
                        )}
                      </Flex>
                    </Flex>
                  );
                }}
              </Formik>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Modal isOpen={modalOpen} onClose={onModalClose} size="lg">
        <ModalOverlay />
        <ModalContent p="12px">
          <ModalHeader>
            <Typography.H2>Success!</Typography.H2>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Typography.Body1>
              You are registered for {league.name}! You should have received an email confirming
              your registration details.
            </Typography.Body1>
            <Box pt="12px" />
            <Typography.Body1>
              Please reach out to Bob at{' '}
              <a href="mailto:bambrose24@gmail.com" style={{textDecoration: 'underline'}}>
                bambrose24@gmail.com
              </a>{' '}
              with any questions or help
            </Typography.Body1>
          </ModalBody>
          <ModalFooter>
            <Button w="100%" variant="solid" onClick={onModalClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function RegisterButton() {
  const formik = useFormikContext<RegistrationFormType>();
  return (
    <Button
      variant="solid"
      w="100%"
      isLoading={formik.isSubmitting}
      disabled={formik.isSubmitting || !formik.isValid}
      onClick={formik.submitForm}
    >
      Register
    </Button>
  );
}
