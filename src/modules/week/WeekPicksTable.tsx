import {
  Box,
  Flex,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
  Tooltip,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import {
  AllTeamsQuery,
  FindLeagueMembersQuery,
  LatePolicy,
  PicksByWeekQuery,
} from '@src/generated/graphql';
import {useEffect, useMemo, useState} from 'react';
import UserTag from '@src/modules/profile/UserTag';
import moment from 'moment';
import {useLeaguePageMemberViewer} from '@src/hooks/useLeaguePageMemberViewer';
import {showUnstartedLatePolicies} from '@src/util/constants';
import {Typography} from '../Typography';
import {ChatIcon} from '@chakra-ui/icons';

type WeekPicksTableProps = {
  teams: AllTeamsQuery;
  people: FindLeagueMembersQuery;
  picksData: PicksByWeekQuery;
  simulatedPicks: Record<number, number>;
  toggleMessagesDrawer: () => void;
};

export const WeekPicksTable: React.FC<WeekPicksTableProps> = ({
  teams,
  people,
  picksData,
  simulatedPicks,
  toggleMessagesDrawer,
}) => {
  const teamIdToTeam = teams.teams.reduce((prev, curr) => {
    prev[curr.teamid] = curr;
    return prev;
  }, {} as Record<number, AllTeamsQuery['teams'][number]>);

  const memberIdToMember = people.leagueMembers.reduce((prev, curr) => {
    prev[curr.membership_id] = curr;
    return prev;
  }, {} as Record<number, FindLeagueMembersQuery['leagueMembers'][number]>);

  const memberIdToPicks = picksData.picksByWeek.picks.reduce((prev, curr) => {
    const member_id = curr.member_id!;
    if (!(member_id in prev)) {
      prev[member_id] = [];
    }
    if (curr.gid in simulatedPicks) {
      const alteredPick = {
        ...curr,
        correct: curr.winner === simulatedPicks[curr.gid] ? 1 : 0,
      };
      prev[member_id].push(alteredPick);
    } else {
      prev[member_id].push(curr);
    }
    return prev;
  }, {} as Record<number, PicksByWeekQuery['picksByWeek']['picks']>);

  const gameIdToGame = picksData.picksByWeek.games.reduce((prev, curr) => {
    prev[curr.gid] = curr;
    return prev;
  }, {} as Record<number, PicksByWeekQuery['picksByWeek']['games'][number]>);

  const pickSort = (a: {gid: number}, b: {gid: number}) => {
    // get games from mapping and compare ts
    const aGame = gameIdToGame[a.gid];
    const bGame = gameIdToGame[b.gid];

    if (aGame.ts === bGame.ts) {
      return aGame.gid - bGame.gid;
    }
    return moment(aGame.ts).diff(moment(bGame.ts));
  };
  const games = [...picksData.picksByWeek.games];
  games.sort(pickSort);

  const memberIdToCorrect = Object.entries(memberIdToPicks).reduce((prev, val) => {
    const [memberId, picks] = val;
    prev[memberId] = picks.reduce((acc, curr) => acc + (curr.correct ? 1 : 0), 0);
    return prev;
  }, {} as Record<string, number>);

  const rankedMemberIds = Object.keys(memberIdToPicks)
    .sort((a, b) => {
      const aCorrect = memberIdToCorrect[a];
      const bCorrect = memberIdToCorrect[b];
      if (aCorrect < bCorrect) {
        return 1;
      }
      if (bCorrect < aCorrect) {
        return -1;
      }
      const aMember = memberIdToMember[parseInt(a)];
      const bMember = memberIdToMember[parseInt(b)];
      return aMember.people.username.localeCompare(bMember.people.username);
    })
    .map(x => parseInt(x));

  return (
    <Flex justify="center">
      <Box bg="white" borderRadius="10px" minWidth="300px" paddingBottom="5px" overflow="auto">
        <PicksTable
          picksData={picksData}
          memberIdToPicks={memberIdToPicks}
          rankedMemberIds={rankedMemberIds}
          memberIdToMember={memberIdToMember}
          memberIdToCorrect={memberIdToCorrect}
          teamIdToTeam={teamIdToTeam}
          simulatedPicks={simulatedPicks}
          toggleMessagesDrawer={toggleMessagesDrawer}
        />
      </Box>
    </Flex>
  );
};

type PicksTableProps = {
  picksData: PicksByWeekQuery;
  memberIdToPicks: Record<number, PicksByWeekQuery['picksByWeek']['picks']>;
  memberIdToMember: Record<number, FindLeagueMembersQuery['leagueMembers'][number]>;
  memberIdToCorrect: Record<string, number>;
  rankedMemberIds: Array<number>;
  teamIdToTeam: Record<number, AllTeamsQuery['teams'][number]>;
  simulatedPicks: Record<number, number>;
  toggleMessagesDrawer: () => void;
};

type PicksTableMessage = PicksByWeekQuery['picksByWeek']['messages'][number];

const PicksTable: React.FC<PicksTableProps> = ({
  picksData,
  memberIdToPicks,
  memberIdToMember,
  memberIdToCorrect,
  rankedMemberIds,
  teamIdToTeam,
  simulatedPicks,
  toggleMessagesDrawer,
}) => {
  const league = picksData?.league;
  const games = picksData?.picksByWeek?.games;

  const {data: leagueViewer} = useLeaguePageMemberViewer();
  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (leagueViewer?.me?.leagueMember?.membership_id) {
      setSelectedRow(leagueViewer.me.leagueMember.membership_id);
    }
  }, [leagueViewer, setSelectedRow]);

  const memberIdToMessages = useMemo(() => {
    const map = new Map<number, PicksTableMessage[]>();
    picksData?.picksByWeek?.messages?.forEach(m => {
      if (map.has(m.member_id)) {
        map.set(m.member_id, []);
      }
      const l = map.get(m.member_id) ?? [];
      l.push(m);
      map.set(m.member_id, [...l]);
    });
    return map;
  }, [picksData]);

  function selectRow(userRowId: number) {
    userRowId === selectedRow ? setSelectedRow(undefined) : setSelectedRow(userRowId);
  }

  const isMobile = useBreakpointValue({base: true, md: false});

  return (
    <TableContainer overflowY="unset" overflowX="unset">
      <Table size={{base: 'sm', xl: 'md'}} fontSize={14} variant="simple">
        <Thead>
          <Tr>
            <Th bg="white" left={0} position={'sticky'} zIndex={1}>
              User
            </Th>
            {games.map(game => {
              return (
                <Th position="sticky" top="0" z-index="10" opacity=".9" bg="white" key={game.gid}>
                  {game.teams_games_awayToteams.abbrev}
                  <br />
                  {game.teams_games_homeToteams.abbrev}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {rankedMemberIds.map(memberId => {
            const memberPicks = memberIdToPicks[memberId];
            const isSelectedRow = selectedRow === memberId;

            const gidToMemberPick = memberPicks.reduce((prev, curr) => {
              prev.set(curr.gid, curr);
              return prev;
            }, new Map<number, typeof memberPicks[number]>());

            const memberMessages = memberIdToMessages.get(memberId);
            const hasMessages = memberMessages && memberMessages.length > 0;

            const scoreTotal = memberPicks.find(p => p.score && p.score > 0)?.score;

            const member = memberIdToMember[memberId!];
            return (
              <Tr
                key={`${memberId}_picks`}
                transition={'all .1s linear'}
                _hover={{bgColor: 'gray.100'}}
                onClick={() => selectRow(memberId)}
                borderY={memberId === selectedRow ? '2px solid white' : ''}
                bgColor={memberId === selectedRow ? 'gray.50' : ''}
                boxShadow={memberId === selectedRow ? '2px 2px 10px gray' : ''}
                role="group"
              >
                <Td py={1} left={0} position={'sticky'} zIndex={1} bgColor={'white'} pl={2} pr={2}>
                  {isMobile ? (
                    <Flex direction="column" gap="2px">
                      <UserTag user_id={member.people.uid} username={member.people.username} />
                      <Flex gap="4px" w="100%" justify="center" alignItems="center">
                        <strong style={{display: 'block', textAlign: 'center'}}>
                          {memberIdToCorrect[memberId.toString()]} ({scoreTotal})
                        </strong>
                        {hasMessages && (
                          <IconButton aria-label="See week chat">
                            <ChatIcon
                              color="gray.400"
                              cursor="pointer"
                              onClick={toggleMessagesDrawer}
                            />
                          </IconButton>
                        )}
                      </Flex>
                    </Flex>
                  ) : (
                    <Flex direction="column">
                      <Flex
                        justify="space-between"
                        align="center"
                        px={{base: 0, lg: '8px'}}
                        gap="2px"
                      >
                        <UserTag user_id={member.people.uid} username={member.people.username} />
                        <strong>
                          {memberIdToCorrect[memberId.toString()]} ({scoreTotal})
                        </strong>
                        {hasMessages && (
                          <Tooltip label="Click to see this person's week message">
                            <IconButton aria-label="See week chat">
                              <ChatIcon
                                color="gray.400"
                                cursor="pointer"
                                onClick={toggleMessagesDrawer}
                              />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Flex>
                    </Flex>
                  )}
                </Td>
                {games.map(game => {
                  const pick = gidToMemberPick.get(game.gid);
                  const {correct, winner} = pick ?? {};
                  const winnerTeam = winner ? teamIdToTeam[winner] : undefined;

                  const isViewer =
                    leagueViewer?.me?.leagueMember?.membership_id &&
                    leagueViewer.me.leagueMember.membership_id === pick?.member_id;

                  const shouldShow =
                    game.started ||
                    isViewer ||
                    (league &&
                      league.late_policy &&
                      showUnstartedLatePolicies.includes(league?.late_policy));

                  const baseBg: 'yellow' | 'red' | 'green' | undefined =
                    !game.done && !simulatedPicks[game.gid]
                      ? undefined
                      : !winnerTeam?.abbrev
                      ? 'yellow'
                      : correct
                      ? 'green'
                      : 'red';

                  const Row = (
                    <Td
                      transition="0.3s"
                      _groupHover={{
                        bg: baseBg ? `${baseBg}.400` : undefined,
                      }}
                      cursor="default"
                      bg={baseBg ? (isSelectedRow ? `${baseBg}.400` : `${baseBg}.300`) : undefined}
                      key={`${member.membership_id}_${game.gid}_pick`}
                    >
                      {shouldShow ? winnerTeam?.abbrev ?? 'N/A' : '--'}
                    </Td>
                  );

                  return shouldShow ? (
                    Row
                  ) : (
                    <Tooltip hasArrow label="You can see this pick when the game starts">
                      {Row}
                    </Tooltip>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
