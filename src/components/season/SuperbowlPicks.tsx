import {gql} from '@apollo/client';
import {Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {useSuperbowlPicksQuery} from '@src/generated/graphql';
import UserTag from '../profile/UserTag';
import {FuntimeError} from '../shared/FuntimeError';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';

export function SuperbowlPicks({leagueId}: {leagueId: number}) {
  const {data, loading, error} = useSuperbowlPicksQuery({variables: {leagueId}});

  if (loading) {
    return <FuntimeLoading />;
  }

  if (!data || error) {
    return <FuntimeError />;
  }
  return (
    <Flex direction="column">
      <TableContainer overflowY="auto" overflowX="auto" mt="12px">
        <Table size="md" variant="simple" fontSize={[14, 16]}>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Winner</Th>
              <Th>Loser</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.superbowls.map(superbowl => {
              return (
                <Tr key={superbowl.id} transition={'all .3s ease'} _hover={{bgColor: 'gray.50'}}>
                  <Td>
                    <UserTag
                      user_id={superbowl.leaguemembers?.people?.uid ?? 0}
                      username={superbowl.leaguemembers?.people?.username ?? ''}
                    />
                  </Td>
                  <Td>
                    <Typography.Body2>
                      {superbowl.teams_superbowl_winnerToteams.abbrev}
                    </Typography.Body2>
                  </Td>
                  <Td>
                    <Typography.Body2>
                      {superbowl.teams_superbowl_loserToteams.abbrev}
                    </Typography.Body2>
                  </Td>
                  <Td>
                    <Typography.Body2>{superbowl.score}</Typography.Body2>
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
