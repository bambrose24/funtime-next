import {gql} from '@apollo/client';
import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {LeagueInfo} from '@src/components/admin/league/LeagueInfo';
import {ManagePlayers} from '@src/components/admin/league/ManagePlayers';
import {FuntimeError} from '@src/components/shared/FuntimeError';
import {FuntimeLoading} from '@src/components/shared/FuntimeLoading';
import {Typography} from '@src/components/Typography';
import {FuntimePage} from '@src/FuntimePage';
import {MemberRole, useLeagueAdminQuery} from '@src/generated/graphql';
import {useRouter} from 'next/router';

const _LeagueAdminQuery = gql`
  query LeagueAdmin($leagueId: Int!) {
    me {
      id
      uid
      username
      leaguemembers(where: {league_id: {equals: $leagueId}}) {
        id
        role
      }
    }
    league(where: {league_id: $leagueId}) {
      id
      name
      leaguemembers {
        id
        paid
        membership_id
        hasPickedNextGame
        picks {
          id
          week
          correct
        }
        people {
          id
          uid
          username
          email
        }
      }
    }
    weekForPicks(leagueId: $leagueId) {
      week
    }
  }
`;

export default function LeagueAdminPage() {
  const router = useRouter();
  const leagueId = Number(router.query['leagueId']?.toString() || '');

  const {data, loading, error} = useLeagueAdminQuery({variables: {leagueId}});
  if (loading) {
    return (
      <FuntimePage>
        <FuntimeLoading />
      </FuntimePage>
    );
  }
  if (error || !data) {
    console.error(error);
    return (
      <FuntimePage>
        <FuntimeError />
      </FuntimePage>
    );
  }

  if (data?.me?.leaguemembers?.some(l => l.role !== MemberRole.Admin)) {
    console.error(
      `User tried to view admin page for league they arent an admin of ${leagueId} ${data.me.uid}`
    );
  }

  return (
    <FuntimePage>
      <Flex justify="center" w="100%">
        <Flex direction="column" maxW="3xl" w="100%" layerStyle="funtime-card">
          <Typography.H2>{data.league?.name}</Typography.H2>
          <Typography.Subtitle2 pt="4px">Admin Page</Typography.Subtitle2>
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab>League Info</Tab>
              <Tab>Manage Players</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LeagueInfo leagueId={leagueId} />
              </TabPanel>
              <TabPanel>
                <ManagePlayers leagueId={leagueId} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </FuntimePage>
  );
}
