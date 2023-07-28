import {gql} from '@apollo/client';
import {Box, Divider, Flex, Grid, GridItem, Stack} from '@chakra-ui/react';
import {useLeagueRegistrationQuery} from '@src/generated/graphql';
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
            uid
          }
        }
      }
    }
  }
`;

export function LeagueRegistration({leagueCode}: RegistrationFormProps) {
  const {data, loading} = useLeagueRegistrationQuery({variables: {leagueCode}});
  const league = data?.league;
  const router = useRouter();

  useEffect(() => {
    if (!loading && router.isReady && !league) {
      router.push('/');
    }
  }, [league, router, loading]);

  if (loading || !league) {
    return <FuntimeLoading />;
  }
  return (
    <Flex w="100%" justify="center">
      <Flex maxW="xl" justify="center" minW="xl" layerStyle="funtime-card">
        <Formik<RegistrationFormType>
          initialValues={{
            didPlayLastYear: false,
            lastYearEmail: undefined,
            username: '',
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
                </Flex>
              </Stack>
            );
          }}
        </Formik>
      </Flex>
    </Flex>
  );
}
