import React from 'react';
import {Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex, Spinner} from '@chakra-ui/react';
import {Typography} from '../Typography';
import {
  SeasonCorrectPicksQuery,
  FindLeagueMembersQuery,
  useFindLeagueMembersQuery,
  useGamesBySeasonQuery,
  useSeasonCorrectPicksQuery,
  useGamesByLeagueQuery,
} from '../../generated/graphql';
import {SEASON} from '../../util/config';
import {Table, Tbody, Tr, Td, Th, Thead, TableContainer, Stat} from '@chakra-ui/react';
import UserTag from '../profile/UserTag';
import _ from 'lodash';
import {useLeagueRankings} from '@src/hooks/useLeagueRankings';

export function Standings({leagueId}: {leagueId: number}) {
  const {data: usersData, loading: usersLoading} = useFindLeagueMembersQuery({
    variables: {league_id: leagueId},
  });

  const {data: correctPicksData, loading: correctPicksLoading} = useSeasonCorrectPicksQuery({
    variables: {league_id: leagueId},
  });

  const {data: seasonGamesData, loading: seasonGamesLoading} = useGamesByLeagueQuery({
    variables: {leagueId},
  });

  const {data: rankings, loading: rankingsLoading, error: rankingsError} = useLeagueRankings({
    leagueId: leagueId,
  });

  if (usersLoading || correctPicksLoading || seasonGamesLoading || rankingsLoading) {
    return (
      <Flex justify="center" m={8}>
        <Spinner />
      </Flex>
    );
  }

  if (!usersData || !correctPicksData || !seasonGamesData || !rankings) {
    return (
      <Box w="100%">
        <Typography.H2>There was an error. Please refresh the page.</Typography.H2>
      </Box>
    );
  }

  // sorted list of members based on correct pick count
  // 1. make list of members & correct pick count
  // 2. then sort it
  const gamesLeft =
    seasonGamesData.league?.games.reduce((prev, curr) => (curr.done ? prev : prev + 1), 0) ?? 0;

  return (
    <Flex direction="column">
      <Box p="12px">
        {gamesLeft > 0 && gamesLeft < 40 && (
          <Alert status="warning">
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
            {rankings.map(({member: {people: {uid, username}}, num_correct, rank}) => (
              <React.Fragment key={uid}>
                <Tr transition={'all .3s ease'} _hover={{bgColor: 'gray.50'}}>
                  <Td pl={6} pr={0} py={0}>
                    <Stat>
                      <Typography.Body2>{rank}</Typography.Body2>
                    </Stat>
                  </Td>
                  <Td pr={2} pl={4} py={2}>
                    <UserTag user_id={uid} username={username} />
                  </Td>
                  <Td>
                    <Typography.Body2>{num_correct}</Typography.Body2>
                  </Td>
                </Tr>
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
