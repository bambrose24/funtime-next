import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import UserTag from '@src/modules/profile/UserTag';
import {Typography} from '@src/modules/Typography';
import {useLeagueAdminQuery} from '@src/generated/graphql';
import {MarkAsPaidButton} from './MarkAsPaidButton';
import {useState} from 'react';
import {MemberEmailsRows} from './MemberEmailsRows';

type LeagueInfoProps = {
  leagueId: number;
};

export function LeagueInfo({leagueId}: LeagueInfoProps) {
  const {data} = useLeagueAdminQuery({variables: {leagueId}});
  const [memberToShowEmails, setMemberToShowEmails] = useState(0);
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
              <Th>Picked Next Week {nextWeek ? `(Week ${nextWeek})` : ''}</Th>
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
                    <Typography.Body2>{index + 1}</Typography.Body2>
                  </Td>
                  <Td>
                    <UserTag user_id={member.people.uid} username={member.people.username} />
                  </Td>
                  <Td>
                    <Flex alignItems="center" gap="8px">
                      <Typography.H4 minWidth="40px">{member.paid ? 'Yes' : 'No'}</Typography.H4>
                      <MarkAsPaidButton
                        memberId={member.membership_id}
                        username={member.people.username}
                        paid={member.paid ?? false}
                        leagueName={data.league?.name || ''}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Typography.H4>{didPickNextWeek ? 'Yes' : 'No'}</Typography.H4>
                  </Td>
                  <Td>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setMemberToShowEmails(member.membership_id);
                      }}
                    >
                      Show Emails
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {memberToShowEmails > 0 && (
        <MemberEmailsRows memberId={memberToShowEmails} skeletonCount={3} />
      )}
    </>
  );
}
