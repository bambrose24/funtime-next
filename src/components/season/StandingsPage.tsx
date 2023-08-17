import {gql} from '@apollo/client';
import {Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useLeagueQuery} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {FuntimeError} from '../shared/FuntimeError';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';
import {Standings} from './Standings';
import {SuperbowlPicks} from './SuperbowlPicks';
import {WeeklyWinners} from './WeeklyWinners';

export type StandingsPageProps = {
  leagueId: number;
};

export function StandingsPage({leagueId}: Partial<StandingsPageProps>) {
  const user = useUser();
  if (!user || !leagueId) {
    return <FuntimeError />;
  }

  return <StandingsPageImpl leagueId={leagueId} />;
}

function StandingsPageImpl({leagueId}: StandingsPageProps) {
  const user = useUser();
  const {data, loading, error} = useLeagueQuery({variables: {leagueId}});
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
            {league.superbowl_competition ? <Tab>Super Bowl Picks</Tab> : null}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Standings leagueId={leagueId} />
            </TabPanel>
            <TabPanel>
              <WeeklyWinners leagueId={leagueId} />
            </TabPanel>
            {league.superbowl_competition ? (
              <TabPanel>
                <SuperbowlPicks leagueId={leagueId} />
              </TabPanel>
            ) : null}
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
