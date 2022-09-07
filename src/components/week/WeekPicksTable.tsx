import { Typography } from "@src/components/Typography";
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
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekQuery,
} from "@src/generated/graphql";
import { useState } from "react";
import { LEAGUE_ID } from "@src/util/config";
import UserTag from "@src/components/profile/UserTag";
import moment from "moment";
import { FuntimeLoading } from "../shared/FuntimeLoading";

export const WeekPicksTable: React.FC = () => {
  const { data: picksData, loading: picksLoading } = usePicksByWeekQuery({
    variables: { league_id: LEAGUE_ID, week: 1 },
    pollInterval: 1000 * 60 * 3, // every 3 minutes
  });

  const { data: people, loading: peopleLoading } = useFindLeagueMembersQuery({
    variables: {
      league_id: LEAGUE_ID,
    },
  });

  const { data: teams, loading: teamsLoading } = useAllTeamsQuery();

  if ((picksLoading && !picksData) || peopleLoading || teamsLoading) {
    return <FuntimeLoading />;
  }

  if (!picksData || !people || !teams) {
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }

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
          memberIdToMember={memberIdToMember}
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
                  {game.teams_games_awayToteams.abbrev} @{" "}
                  {game.teams_games_homeToteams.abbrev}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(memberIdToPicks).map((val) => {
            const memberPicks = val[1];
            memberPicks.sort(pickSort);
            const memberId = parseInt(val[0]);

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
                  <UserTag
                    user_id={member.people.uid}
                    username={member.people.username}
                  />
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
