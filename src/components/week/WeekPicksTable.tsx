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
} from "@chakra-ui/react";
import {
  AllTeamsQuery,
  FindLeagueMembersQuery,
  PicksByWeekQuery,
} from "@src/generated/graphql";
import { useState } from "react";
import UserTag from "@src/components/profile/UserTag";
import moment from "moment";

type WeekPicksTableProps = {
  teams: AllTeamsQuery;
  people: FindLeagueMembersQuery;
  picksData: PicksByWeekQuery;
};

export const WeekPicksTable: React.FC<WeekPicksTableProps> = ({
  teams,
  people,
  picksData,
}) => {
  const teamIdToTeam = teams.teams.reduce((prev, curr) => {
    prev[curr.teamid] = curr;
    return prev;
  }, {} as Record<number, AllTeamsQuery["teams"][number]>);

  const memberIdToMember = people.leagueMembers.reduce((prev, curr) => {
    prev[curr.membership_id] = curr;
    return prev;
  }, {} as Record<number, FindLeagueMembersQuery["leagueMembers"][number]>);

  const memberIdToPicks = picksData.picksByWeek.picks.reduce((prev, curr) => {
    const member_id = curr.member_id!;
    if (!(member_id in prev)) {
      prev[member_id] = [];
    }
    prev[member_id].push(curr);
    return prev;
  }, {} as Record<number, PicksByWeekQuery["picksByWeek"]["picks"]>);

  const gameIdToGame = picksData.picksByWeek.games.reduce((prev, curr) => {
    prev[curr.gid] = curr;
    return prev;
  }, {} as Record<number, PicksByWeekQuery["picksByWeek"]["games"][number]>);

  const pickSort = (a: { gid: number }, b: { gid: number }) => {
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

  const memberIdToCorrect = Object.entries(memberIdToPicks).reduce(
    (prev, val) => {
      const [memberId, picks] = val;
      prev[memberId] = picks.reduce(
        (acc, curr) => acc + (curr.correct ? 1 : 0),
        0
      );
      return prev;
    },
    {} as Record<string, number>
  );

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
    .map((x) => parseInt(x));

  return (
    <Flex justify="center">
      <Box
        bg="white"
        borderRadius="10px"
        minWidth="300px"
        w={[500, 600, 1000, 1800]}
        paddingBottom="5px"
        overflow="auto"
      >
        <PicksTable
          games={games}
          memberIdToPicks={memberIdToPicks}
          rankedMemberIds={rankedMemberIds}
          memberIdToMember={memberIdToMember}
          memberIdToCorrect={memberIdToCorrect}
          gameIdToGame={gameIdToGame}
          teamIdToTeam={teamIdToTeam}
        />
      </Box>
    </Flex>
  );
};

type PicksTableProps = {
  games: PicksByWeekQuery["picksByWeek"]["games"];
  memberIdToPicks: Record<number, PicksByWeekQuery["picksByWeek"]["picks"]>;
  memberIdToMember: Record<
    number,
    FindLeagueMembersQuery["leagueMembers"][number]
  >;
  memberIdToCorrect: Record<string, number>;
  rankedMemberIds: Array<number>;
  gameIdToGame: Record<
    number,
    PicksByWeekQuery["picksByWeek"]["games"][number]
  >;
  teamIdToTeam: Record<number, AllTeamsQuery["teams"][number]>;
};

const PicksTable: React.FC<PicksTableProps> = ({
  games,
  memberIdToPicks,
  memberIdToMember,
  memberIdToCorrect,
  rankedMemberIds,
  gameIdToGame,
  teamIdToTeam,
}) => {
  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);
  const pickSort = (a: { gid: number }, b: { gid: number }) => {
    // get games from mapping and compare ts
    const aGame = gameIdToGame[a.gid];
    const bGame = gameIdToGame[b.gid];

    if (aGame.ts === bGame.ts) {
      return aGame.gid - bGame.gid;
    }
    return moment(aGame.ts).diff(moment(bGame.ts));
  };

  function selectRow(userRowId: number) {
    userRowId === selectedRow
      ? setSelectedRow(undefined)
      : setSelectedRow(userRowId);
  }

  return (
    <TableContainer overflowY="unset" overflowX="unset">
      <Table size="md" fontSize={[14, 16]} variant="unstyled">
        <Thead>
          <Tr>
            <Th bg="white">User</Th>
            {games.map((game) => {
              return (
                <Th
                  position="sticky"
                  top="0"
                  z-index="10"
                  opacity=".9"
                  bg="white"
                  key={game.gid}
                >
                  {game.teams_games_awayToteams.abbrev}
                  <br />
                  {game.teams_games_homeToteams.abbrev}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {/* {Object.entries(memberIdToPicks).map((val) => { */}
          {rankedMemberIds.map((memberId) => {
            const memberPicks = memberIdToPicks[memberId];
            memberPicks.sort(pickSort);

            const member = memberIdToMember[memberId!];
            return (
              <Tr
                key={`${memberId}_picks`}
                transition={"all .1s linear"}
                _hover={{ bgColor: "gray.100" }}
                onClick={() => selectRow(memberId)}
                borderY={memberId === selectedRow ? "2px solid white" : ""}
                bgColor={memberId === selectedRow ? "white" : ""}
                boxShadow={memberId === selectedRow ? "2px 2px 10px gray" : ""}
              >
                <Td py={1}>
                  <Flex
                    justify="space-between"
                    align="center"
                    px={{ base: 0, lg: "8px" }}
                  >
                    <UserTag
                      user_id={member.people.uid}
                      username={member.people.username}
                    />
                    <strong>{memberIdToCorrect[memberId.toString()]}</strong>
                  </Flex>
                </Td>
                {memberPicks.map((pick) => {
                  const { correct, winner } = pick;
                  const winnerTeam = teamIdToTeam[winner!];
                  const game = gameIdToGame[pick.gid];

                  const bg = !game.done
                    ? undefined
                    : correct
                    ? "pickCorrect"
                    : "pickWrong";

                  return (
                    <Td
                      cursor="default"
                      bg={bg}
                      key={`${member.membership_id}_${game.gid}_pick`}
                    >
                      {winnerTeam.abbrev}
                    </Td>
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
