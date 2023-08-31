import {
  Button,
  Flex,
  Stat,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {Check, MonetizationOnOutlined, MoneyOffOutlined, MoneyOutlined} from '@mui/icons-material';
import UserTag from '@src/components/profile/UserTag';
import {Typography} from '@src/components/Typography';
import {useLeagueAdminQuery} from '@src/generated/graphql';
import {MarkAsPaidButton} from './MarkAsPaidButton';

type LeagueInfoProps = {
  leagueId: number;
};

export function LeagueInfo({leagueId}: LeagueInfoProps) {
  const {data} = useLeagueAdminQuery({variables: {leagueId}});
  if (!data) {
    return null;
  }

  const nextWeek = data.weekForPicks.week;

  return (
    <TableContainer overflowY="auto" overflowX="auto" mt="12px">
      <Table size="md" variant="simple" fontSize={[14, 16]}>
        <Thead>
          <Tr>
            <Th />
            <Th>User</Th>
            <Th>Paid?</Th>
            <Th>Picked Next Week {nextWeek ? `(Week ${nextWeek})` : ''}</Th>
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
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
