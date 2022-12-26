import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { Typography } from "../Typography";
import {
  CorrectPicksByLeagueQuery,
  FindLeagueMembersQuery,
  useCorrectPicksByLeagueQuery,
  useFindLeagueMembersQuery,
  useGamesBySeasonQuery,
} from "../../generated/graphql";
import { LEAGUE_ID, SEASON } from "../../util/config";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  TableContainer,
  Stat,
} from "@chakra-ui/react";
import UserTag from "../profile/UserTag";
import _ from "lodash";

export const Standings = () => {
  const { data: usersData, loading: usersLoading } = useFindLeagueMembersQuery({
    variables: { league_id: LEAGUE_ID },
  });

  const { data: correctPicksData, loading: correctPicksLoading } =
    useCorrectPicksByLeagueQuery({ variables: { league_id: LEAGUE_ID } });

  const { data: seasonGamesData, loading: seasonGamesLoading } =
    useGamesBySeasonQuery({ variables: { season: SEASON } });

  if (usersLoading || correctPicksLoading || seasonGamesLoading) {
    return (
      <Flex justify="center" m={8}>
        <Spinner />
      </Flex>
    );
  }

  if (!usersData || !correctPicksData || !seasonGamesData) {
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }

  // sorted list of members based on correct pick count
  // 1. make list of members & correct pick count
  // 2. then sort it
  const sortedMembers = sortedRanks(usersData, correctPicksData);
  const gamesLeft = seasonGamesData.games.reduce(
    (prev, curr) => (curr.done ? prev : prev + 1),
    0
  );

  return (
    <Flex direction="column">
      <Box p="12px">
        {gamesLeft > 0 && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>There are {gamesLeft} games left!</AlertTitle>
          </Alert>
        )}
        {gamesLeft === 0 && (
          <Alert status="info">
            <AlertIcon />
            <AlertTitle>The season is over!</AlertTitle>
          </Alert>
        )}
        <Typography.Body1 color="red.400"></Typography.Body1>
      </Box>
      <TableContainer overflowY="auto" overflowX="auto">
        <Table size="md" variant="simple" fontSize={[14, 16]}>
          <Thead>
            <Tr>
              <Th pl={6} pr={0}>
                Rank
              </Th>
              <Th pr={2} pl={6}>
                User
              </Th>
              <Th pl={0} color="gray" cursor="default">
                Correct
                <br />
                Picks
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedMembers.map(
              ({
                member: {
                  people: { uid, username },
                  membership_id,
                },
                num_correct,
                rank,
              }) => {
                const picks = correctPicksData.leagueMembers.find(
                  (m) => m.membership_id === membership_id
                );
                return (
                  <>
                    <Tr
                      key={uid}
                      transition={"all .3s ease"}
                      _hover={{ bgColor: "gray.50" }}
                    >
                      <Td pl={6} pr={0} py={0}>
                        <Stat>{rank}</Stat>
                      </Td>
                      <Td pr={2} pl={4} py={2}>
                        <UserTag user_id={uid} username={username}></UserTag>
                      </Td>
                      <Td>{num_correct}</Td>
                    </Tr>
                  </>
                );
              }
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

type RankingEntry = {
  member: FindLeagueMembersQuery["leagueMembers"][0];
  num_correct: number;
  rank: number;
};

function sortedRanks(
  leagueMembers: FindLeagueMembersQuery,
  correctPicksData: CorrectPicksByLeagueQuery
): Array<RankingEntry> {
  // membership_id to member
  const memberIdToMember = _.keyBy(
    leagueMembers.leagueMembers,
    (m) => m.membership_id
  );

  const memberWithCorrectPicks = correctPicksData.leagueMembers.map(
    ({ membership_id, picks }) => {
      const member = memberIdToMember[membership_id];
      return {
        member,
        num_correct: _.sumBy(picks, (p) => (p.correct === 1 ? 1 : 0)),
      };
    }
  );

  const sortedResult = _(memberWithCorrectPicks)
    .sortBy((x) => x.member.people.username)
    .sortBy((x) => -1 * x.num_correct)
    .value();

  let rankingTracker = 1;
  let prev = 0;
  return sortedResult.map((current, i) => {
    if (i === 0) {
      prev = current.num_correct;
    } else if (current.num_correct !== prev) {
      prev = current.num_correct;
      rankingTracker = i + 1;
    }
    prev = current.num_correct;
    return { ...current, rank: rankingTracker };
  });
}
