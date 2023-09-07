import {Box, Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import UserTag from '@src/modules/profile/UserTag';
import {Typography} from '@src/modules/Typography';
import {useLeagueAdminQuery} from '@src/generated/graphql';
import {MarkAsPaidButton} from './MarkAsPaidButton';
import {useRouter} from 'next/router';

type ManagePlayers = {
  leagueId: number;
};

export function ManagePlayers({leagueId}: ManagePlayers) {
  const {data} = useLeagueAdminQuery({variables: {leagueId}});
  const router = useRouter();
  if (!data) {
    return null;
  }

  const nextWeek = data.weekForPicks.week;

  return (
    <>
      <TableContainer pt="12px" overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th />
              <Th>User</Th>
              <Th>Paid?</Th>
              <Th>Picks Due?</Th>
              <Th>Emails</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.league?.leaguemembers.map((member, index) => {
              const pickedWeeks = new Set(member.picks.map(p => p.week));
              const didPickNextWeek = nextWeek ? pickedWeeks.has(nextWeek) : true;
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
                        <UserTag user_id={member.people.uid} username={member.people.username} />
                      </Box>
                      <Typography.Subtitle2>{member.people.email}</Typography.Subtitle2>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems="center" gap="8px">
                      <Typography.Subtitle1 minWidth="40px">
                        {member.paid ? 'Yes' : 'No'}
                      </Typography.Subtitle1>
                      <MarkAsPaidButton
                        memberId={member.membership_id}
                        username={member.people.username}
                        paid={member.paid ?? false}
                        leagueName={data.league?.name || ''}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Typography.Subtitle1>{!didPickNextWeek ? 'Yes' : 'No'}</Typography.Subtitle1>
                  </Td>
                  <Td>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        router.push(`/league/${leagueId}/admin/${member.membership_id}/emails`);
                      }}
                    >
                      View Emails
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
