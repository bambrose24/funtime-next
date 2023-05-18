import {gql} from '@apollo/client';
import {Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useUserLeaguesQuery} from '@src/generated/graphql';
import {LEAGUE_ID} from '@src/util/config';
import {useUser} from '@supabase/auth-helpers-react';
import {FuntimeError} from '../shared/FuntimeError';
import {Typography} from '../Typography';
import {Standings} from './Standings';
import {WeeklyWinners} from './WeeklyWinners';

export type StandingsPageProps = {
  leagueId: number;
};

const MyLeaguesQuery = gql`
  query MyLeagues {
    me {
      leaguemembers {
        leagues {
          league_id
          name
        }
      }
    }
  }
`;

export function StandingsPage({leagueId}: Partial<StandingsPageProps>) {
  const user = useUser();
  if (!user) {
    return <FuntimeError />;
  }

  if (!leagueId) {
  }
}

function StandingsPageImpl({leagueId}: StandingsPageProps) {
  const user = useUser();
  if (!user || !leagueId) {
    return <FuntimeError />;
  }
  return (
    <Flex justify="center" overflowX="hidden" overflowY="hidden">
      <Box bg="white" px="12px" py="12px" borderRadius="10px" minWidth="300px" w={[500, 500, 600]}>
        <Typography.H1 my="12px" align="center">
          Leaderboard
        </Typography.H1>
        <Typography.Body2 my="12px">
          Note, leaderboard stats are updated in real time. If a game has completed, the standings
          have updated.
        </Typography.Body2>
        <Tabs>
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
