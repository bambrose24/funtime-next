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

export const WeeklyWinners = () => {
  const {data, error} = useWinnersQuery({
    variables: {league_id: LEAGUE_ID},
  });
  if (error) {
    return <Typography.H3>There was an error loading winners for the year.</Typography.H3>;
  }
  if (!data) {
    return <FuntimeLoading />;
  }
  const winners = _.sortBy(data.weekWinners, 'week');

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
            {winners.map(winner => {
              const {correct, member, week} = winner;
              return (
                <React.Fragment key={winner.week}>
                  <Tr key={winner.week} transition={'all .3s ease'} _hover={{bgColor: 'gray.50'}}>
                    <Td pl={6} pr={0} py={0}>
                      <Stat>{winner.week}</Stat>
                    </Td>
                    <Td pr={2} pl={4} py={2}>
                      <HStack>
                        {member.map(m => (
                          <UserTag
                            key={m.people.uid}
                            user_id={m.people.uid}
                            username={m.people.username}
                          />
                        ))}
                      </HStack>
                    </Td>
                    <Td>{correct}</Td>
                  </Tr>
                </React.Fragment>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
