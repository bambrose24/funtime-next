import {
  Box,
  Button,
  Flex,
  FormControl,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import UserTag from '@src/modules/profile/UserTag';
import {Typography} from '@src/modules/Typography';
import {
  GamesByLeagueQuery,
  useGamesByLeagueQuery,
  useLeagueAdminQuery,
  useWeekForPicksQuery,
} from '@src/generated/graphql';
import {MarkAsPaidButton} from './MarkAsPaidButton';
import Link from 'next/link';
import {useEffect, useMemo, useState} from 'react';
import {FuntimeLoading} from '@src/modules/shared/FuntimeLoading';
import _ from 'lodash';
import {DownloadLeaguePlayersButton} from './DownloadLeaguePlayers';

type ManagePlayers = {
  leagueId: number;
};

export function ManagePlayers({leagueId}: ManagePlayers) {
  const {data} = useLeagueAdminQuery({variables: {leagueId}});
  const {data: weekForPicks} = useWeekForPicksQuery({
    variables: {
      leagueId,
    },
  });

  const {data: games} = useGamesByLeagueQuery({variables: {leagueId}});

  if (!data || !weekForPicks || !games) {
    return <FuntimeLoading />;
  }

  const nextWeek = data.weekForPicks.week;

  return (
    <Flex direction="column" w="100%" alignItems="start">
      <Flex w="100%" justify="end">
        {data?.league?.league_id && (
          <DownloadLeaguePlayersButton leagueId={data.league.league_id} />
        )}
      </Flex>
      <TableContainer pt="12px" overflowX="auto">
        <Table variant="simple" size="sm" w="100%">
          <Thead>
            <Tr>
              <Th />
              <Th>User</Th>
              <Th>Paid?</Th>
              <Th>Picks Due?</Th>
              <Th>Emails</Th>
              <Th>Make Picks</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.league?.memberpeople.map(({member, user}, index) => {
              const pickedWeeks = new Set(member.picks.map(p => p.week));
              // const didPickNextWeek = nextWeek ? pickedWeeks.has(nextWeek) : true;
              return (
                <Tr
                  key={member.membership_id}
                  transition={'all .3s ease'}
                  _hover={{bgColor: 'gray.50'}}
                >
                  <Td>
                    <Typography.Subtitle2>{index + 1}</Typography.Subtitle2>
                  </Td>
                  <Td>
                    <Flex w="100%" direction="column" gap="4px">
                      <Box>
                        <UserTag user_id={user.uid} username={user.username} />
                      </Box>
                      <Typography.Subtitle2>{user.email}</Typography.Subtitle2>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems="center" gap="8px">
                      <Typography.Subtitle1 minWidth="40px">
                        {member.paid ? 'Yes' : 'No'}
                      </Typography.Subtitle1>
                      <MarkAsPaidButton
                        memberId={member.membership_id}
                        username={user.username}
                        paid={member.paid ?? false}
                        leagueName={data.league?.name || ''}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Typography.Subtitle1>
                      {!member.hasPickedNextGame ? 'Yes' : 'No'}
                    </Typography.Subtitle1>
                  </Td>
                  <Td>
                    <Link href={`/league/${leagueId}/admin/${member.membership_id}/emails`}>
                      <Button variant="outline" size="sm">
                        View Emails
                      </Button>
                    </Link>
                  </Td>
                  <Td>
                    <MakePicksTableEntry
                      leagueId={leagueId}
                      memberId={member.membership_id}
                      currentWeek={weekForPicks.weekForPicks?.week ?? undefined}
                      games={games}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

function MakePicksTableEntry({
  leagueId,
  memberId,
  currentWeek,
  games,
}: {
  leagueId: number;
  memberId: number;
  currentWeek: number | undefined;
  games: GamesByLeagueQuery;
}) {
  const [week, setWeek] = useState(currentWeek);

  useEffect(() => {
    setWeek(currentWeek);
  }, [currentWeek]);

  const weeks = useMemo(() => {
    const weekSet = new Set(games.league?.games.map(g => g.week) ?? []);
    return _.orderBy([...Array.from(weekSet)], x => x);
  }, [games]);

  return (
    <Flex gap="4px">
      <FormControl variant="floating" minW="120px">
        <Select
          value={week}
          onChange={e => {
            setWeek(parseInt(e.target.value));
          }}
        >
          {weeks.map(week => {
            return (
              <option key={`${memberId}_${week}`} value={week}>
                Week {week}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <Link href={`/league/${leagueId}/admin/${memberId}/pick?week=${week}&override=true`}>
        <Button variant="outline" size="md">
          Make Picks
        </Button>
      </Link>
    </Flex>
  );
}
