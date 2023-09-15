import {Flex} from '@chakra-ui/react';
import {
  FindLeagueMembersQuery,
  PicksByWeekQuery,
  useFindLeagueMembersQuery,
} from '@src/generated/graphql';
import {useMemo} from 'react';
import UserTag from '../profile/UserTag';
import {Typography} from '../Typography';
import moment from 'moment-timezone';

export function WeekMessages({data}: {data: PicksByWeekQuery}) {
  const leagueId = data?.league?.league_id;

  const {data: people, loading: peopleLoading} = useFindLeagueMembersQuery({
    variables: {
      league_id: leagueId ?? 0,
    },
    skip: leagueId === undefined,
  });

  const memberIdToPerson = useMemo(() => {
    const map = new Map<number, FindLeagueMembersQuery['leagueMembers'][number]>();
    people?.leagueMembers?.map(m => {
      map.set(m.membership_id, m);
    });
    return map;
  }, [people]);

  return (
    <Flex w="100%" direction="column" gap="12px">
      {data?.picksByWeek?.messages?.map(m => {
        const member = memberIdToPerson.get(m.member_id);
        if (!member) {
          return null;
        }
        return (
          <Flex key={m.id} layerStyle="funtime-z2" direction="column" gap="4px">
            <UserTag user_id={member.people.uid} username={member.people.username} />
            <Typography.Body2 wordBreak="break-word">{m.content}</Typography.Body2>
            <Typography.Subtitle2>
              {moment(m.createdAt)
                .tz('America/New_York')
                .format('MMM D YYYY, h:mm A z')}
            </Typography.Subtitle2>
          </Flex>
        );
      })}
    </Flex>
  );
}
