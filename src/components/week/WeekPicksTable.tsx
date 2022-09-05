import { Typography } from "@src/components/Typography";
import {
  Box,
  Flex,
  Spinner,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import {
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekQuery,
} from "@src/generated/graphql";
import { SetStateAction, useState } from "react";
import { LEAGUE_ID } from "@src/util/config";
import UserTag from "@src/components/profile/UserTag";
import moment from "moment";

export const WeekPicksTable: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);

  const { data: picksData, loading: picksLoading } = usePicksByWeekQuery({
    variables: { league_id: LEAGUE_ID, week: 1 },
    pollInterval: 60,
    fetchPolicy: "cache-and-network",
  });

  const { data: people, loading: peopleLoading } = useFindLeagueMembersQuery({
    variables: {
      league_id: LEAGUE_ID,
    },
  });

  const { data: teams, loading: teamsLoading } = useAllTeamsQuery();

  if ((picksLoading && !picksData) || peopleLoading || teamsLoading) {
    return (
      <Flex justify="center" m={8}>
        <Spinner />
      </Flex>
    );
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
  }, {} as Record<number, typeof teams["teams"][number]>);

  const memberIdToMember = people.leagueMembers.reduce((prev, curr) => {
    prev[curr.membership_id] = curr;
    return prev;
  }, {} as Record<number, typeof people["leagueMembers"][number]>);

  const memberIdToPicks = picksData.picksByWeek.picks.reduce((prev, curr) => {
    const member_id = curr.member_id!;
    if (!(member_id in prev)) {
      prev[member_id] = [];
    }
    prev[member_id].push(curr);
    return prev;
  }, {} as Record<number, typeof picksData["picksByWeek"]["picks"]>);

  const gameIdToGame = picksData.picksByWeek.games.reduce((prev, curr) => {
    prev[curr.gid] = curr;
    return prev;
  }, {} as Record<number, typeof picksData["picksByWeek"]["games"][number]>);

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

  const games = [...picksData.picksByWeek.games];
  games.sort(pickSort);

  return (
    <Flex justify="center">
      {/* <Box overflowY="auto" overflowX="auto" minWidth="300px" w={[500, 600, 1000, 1500]} h={500} bg='white' px={2} py={2} borderRadius="10px" > */}
      <Box
        bg="white"
        borderRadius="10px"
        minWidth="300px"
        w={[500, 600, 1000, 1800]}
        paddingBottom="5px"
        overflow="auto"
      >
        {/* <Typography.H3 pl={5}> Picks f or Week 1 </Typography.H3> */}
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
                  <>
                    <Tr
                      key={memberId}
                      transition={"all .1s linear"}
                      _hover={{ bgColor: "gray.100" }}
                      onClick={() => selectRow(memberId)}
                      borderY={
                        memberId === selectedRow ? "2px solid white" : ""
                      }
                      bgColor={memberId === selectedRow ? "white" : ""}
                      boxShadow={
                        memberId === selectedRow ? "2px 2px 10px gray" : ""
                      }
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
                          <Td cursor="default" bg={bg}>
                            {winnerTeam.abbrev}
                          </Td>
                        );
                      })}
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};
