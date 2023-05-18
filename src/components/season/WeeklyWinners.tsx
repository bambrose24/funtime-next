import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  HStack,
  Stat,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {useWinnersQuery} from '@src/generated/graphql';
import {LEAGUE_ID} from '@src/util/config';
import _ from 'lodash';
import React from 'react';
import UserTag from '../profile/UserTag';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';

export function WeeklyWinners({leagueId}: {leagueId: number}) {
  const {data, error} = useWinnersQuery({
    variables: {league_id: LEAGUE_ID},
  });
  if (error) {
    return <Typography.H3>There was an error loading winners for the year.</Typography.H3>;
  }
  if (!data) {
    return <FuntimeLoading />;
  }
  const winners = _.sortBy(data.findManyWeekWinners, 'week');
  const weeks = Array.from(new Set(winners.map(w => w.week)));

  return (
    <Flex direction="column">
      <TableContainer overflowY="auto" overflowX="auto" mt="12px">
        <Table size="md" variant="simple" fontSize={[14, 16]}>
          <Thead>
            <Tr>
              <Th pl={6} pr={0}>
                Week
              </Th>
              <Th pr={2} pl={6}>
                User(s)
              </Th>
              <Th pl={0} color="gray" cursor="default">
                Correct
                <br />
                Picks
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {weeks.map(week => {
              const weekWinners = winners.filter(w => w.week === week);
              if (!weekWinners || weekWinners.length === 0) {
                return;
              }
              const {correct_count, member} = weekWinners[0];
              return (
                <Tr key={week} transition={'all .3s ease'} _hover={{bgColor: 'gray.50'}}>
                  <Td pl={6} pr={0} py={0}>
                    <Stat>{week}</Stat>
                  </Td>
                  <Td pr={2} pl={4} py={2}>
                    <HStack>
                      {weekWinners.map(w => (
                        <UserTag
                          key={w.member.people.uid}
                          user_id={w.member.people.uid}
                          username={w.member.people.username}
                        />
                      ))}
                    </HStack>
                  </Td>
                  <Td>{correct_count}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
