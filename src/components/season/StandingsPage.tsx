import {gql} from '@apollo/client';
import {Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useLeagueNameQuery, useMyLeaguesQuery} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {FuntimeError} from '../shared/FuntimeError';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';
import {Standings} from './Standings';
import {WeeklyWinners} from './WeeklyWinners';

export type StandingsPageProps = {
  leagueId: number;
};

const MyLeaguesQuery = gql`
  query MyLeagues {
    me {
      leaguemembers(orderBy: {leagues: {season: desc}}) {
        leagues {
          league_id
          name
        }
      }
    }
  }
`;

export function StandingsPage({leagueId: leagueIdProp}: Partial<StandingsPageProps>) {
  const user = useUser();
  const {data} = useMyLeaguesQuery();
  if (!user) {
    return <FuntimeError />;
  }

  let leagueId = leagueIdProp;
  if (!leagueId) {
    leagueId = data?.me?.leaguemembers?.find(lm => lm.leagues.league_id)?.leagues.league_id;
  }

  if (!leagueId) {
    return <FuntimeError />;
  }

  return <StandingsPageImpl leagueId={leagueId} />;
}

const LeagueNameQueryDoc = gql`
  query LeagueName($leagueId: Int!) {
    league(where: {league_id: $leagueId}) {
      name
    }
  }
`;

function StandingsPageImpl({leagueId}: StandingsPageProps) {
  const user = useUser();
  const {data, loading, error} = useLeagueNameQuery({variables: {leagueId}});
  if (!user || !leagueId || error) {
    return <FuntimeError />;
  }
  const league = data?.league;
  if (!league || loading) {
    return <FuntimeLoading />;
  }

  return (
    <Flex justify="center" overflowX="hidden" overflowY="hidden">
      <Box bg="white" px="12px" py="12px" borderRadius="10px" minWidth="300px" w={[500, 500, 600]}>
        <Typography.H1 my="12px" align="center">
          {league.name} - Leaderboard
        </Typography.H1>
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>Season</Tab>
            <Tab>Weekly Winners</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Standings leagueId={leagueId} />
            </TabPanel>
            <TabPanel>
              <WeeklyWinners leagueId={leagueId} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
