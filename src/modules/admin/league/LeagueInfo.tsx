import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import UserTag from '@src/modules/profile/UserTag';
import {Typography} from '@src/modules/Typography';
import {useLeagueAdminQuery} from '@src/generated/graphql';
import {MarkAsPaidButton} from './MarkAsPaidButton';
import {useRouter} from 'next/router';
import {useMemo} from 'react';

type LeagueInfoProps = {
  leagueId: number;
};

export function LeagueInfo({leagueId}: LeagueInfoProps) {
  const {data} = useLeagueAdminQuery({variables: {leagueId}});

  const maxWeekPicked = useMemo(() => {
    const weeks = new Set<number>();
    data?.league?.memberpeople?.forEach(mp => {
      mp?.member?.picks?.forEach(p => {
        weeks.add(p.week);
      });
    });
    return Math.max(...Array.from(weeks));
  }, [data]);

  // idk why I wrote this code I don't think it's needed
  // const allMemberIds = useMemo(() => {
  //   const memberIdsList =
  //     data?.league?.memberpeople?.map(mp => {
  //       return mp.member.membership_id;
  //     }) ?? [];
  //   return new Set(memberIdsList);
  // }, [data]);

  const memberIdToWeeksPicked = useMemo(() => {
    const mapping = new Map<number, Set<number>>();

    data?.league?.memberpeople?.forEach(mp => {
      if (!mp.member.membership_id) {
        return;
      }
      const member_id = mp.member.membership_id;
      if (!mapping.get(member_id)) {
        mapping.set(member_id, new Set());
      }
      mp.member.picks.forEach(p => {
        mapping.get(member_id)?.add(p.week);
      });
    });

    return mapping;
  }, [data]);

  const playerToMissedWeeks = useMemo(() => {
    const map = new Map<number, Set<number>>();
    Array.from({length: maxWeekPicked}).map((_, i) => {
      const week = i + 1;
      data?.league?.memberpeople?.map(mp => {
        const memberId = mp?.member?.membership_id;
        if (!memberId) {
          return;
        }
        let set = map.get(memberId);
        if (!set) {
          set = new Set<number>();
        }
        if (!memberIdToWeeksPicked.get(memberId)?.has(week)) {
          set.add(week);
        }

        map.set(memberId, set);
      });
    });
    return map;
  }, [data, memberIdToWeeksPicked, maxWeekPicked]);

  if (!data) {
    return null;
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="12px">
      <GridItem colSpan={1}>
        <Flex direction="column" w="100%" gap="12px" layerStyle="funtime-z2">
          <Typography.H4>Missing Picks by Week</Typography.H4>
          <TableContainer maxHeight="500px" overflowY="auto">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>User</Th>
                  <Th>Weeks Missed</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.league?.memberpeople?.map((mp, i) => {
                  const missedWeeks = Array.from(
                    playerToMissedWeeks.get(mp.member.membership_id) ?? []
                  ).sort();
                  return (
                    <Tr key={i}>
                      <Td>
                        <UserTag user_id={mp.user.uid} username={mp.user.username} />
                      </Td>
                      <Td>{missedWeeks.join(', ')}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
}
