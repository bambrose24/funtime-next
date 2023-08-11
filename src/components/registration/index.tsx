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
  Select,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import {useLeagueRegistrationQuery} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {Formik} from 'formik';
import {useRouter} from 'next/router';
import React from 'react';
import {useEffect} from 'react';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';
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
        leaguemembers {
          people {
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
  const user = useUser();
  const league = data?.league;
  const router = useRouter();

  useEffect(() => {
    if (!loading && router.isReady && !league) {
      router.push('/');
    } else if (!user) {
      router.push(`/login?redirectTo=${router.asPath}`);
    }
  }, [league, router, loading]);

  if (loading || !league || !user) {
    return <FuntimeLoading />;
  }

  const priorMember = league.priorLeague?.leaguemembers.find(m => m.people.email === user.email);
  const didPlayLastYear = Boolean(priorMember);

  return (
    <Flex w="100%" justify="center">
      <Flex maxW="xl" justify="center" minW="xl" layerStyle="funtime-card">
        <Stack dir="column" gap="16px" divider={<Divider />} direction="column" w="100%">
          <Typography.H1 textAlign="center">Register for {league.name}</Typography.H1>
          <Flex direction="column">
            <Typography.H3 textAlign="center">League Rules</Typography.H3>
            <Box mt="16px" />
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
                didPlayLastYear: false,
                username: priorMember ? priorMember.people.username : '',
                superbowlLoserTeamId: undefined,
                superbowlWinnerTeamId: undefined,
                superbowlTotalScore: undefined,
              }}
              onSubmit={async values => {
                console.log('values', values);
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
                          {/* put all the teams here with dividers */}
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
                          {/* put all the teams here with dividers */}
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
                      <Button
                        variant="solid"
                        w="100%"
                        isLoading={formik.isSubmitting}
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        Register
                      </Button>
                    </Flex>
                  </Flex>
                );
              }}
            </Formik>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}
