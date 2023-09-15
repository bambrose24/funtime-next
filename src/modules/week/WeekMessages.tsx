import {Box, Flex, IconButton} from '@chakra-ui/react';
import {
  FindLeagueMembersQuery,
  PicksByWeekQuery,
  useDeleteMessageMutation,
  useFindLeagueMembersQuery,
} from '@src/generated/graphql';
import {useMemo, useState} from 'react';
import UserTag from '../profile/UserTag';
import {Typography} from '../Typography';
import moment from 'moment-timezone';
import {useLeaguePageMemberViewer} from '@src/hooks/useLeaguePageMemberViewer';
import {CloseIcon} from '@chakra-ui/icons';
import {gql} from '@apollo/client';

const _DeleteMessageMutation = gql`
  mutation DeleteMessage($messageId: String!) {
    updateOneLeagueMessage(where: {message_id: $messageId}, data: {status: {set: DELETED}}) {
      message_id
    }
  }
`;

type WeekMessagesProps = {data: PicksByWeekQuery; refetchMessages: () => Promise<void>};

export function WeekMessages({data, refetchMessages}: WeekMessagesProps) {
  const leagueId = data?.league?.league_id;

  const {data: people} = useFindLeagueMembersQuery({
    variables: {
      league_id: leagueId ?? 0,
    },
    skip: leagueId === undefined,
  });

  const [deleteMessage] = useDeleteMessageMutation();
  const [deletingMessage, setDeletingMessage] = useState<string | undefined>(undefined);

  const {data: viewerData} = useLeaguePageMemberViewer();

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
            <Flex justify="space-between">
              <Box>
                <UserTag user_id={member.people.uid} username={member.people.username} />
              </Box>
              {member.membership_id === viewerData?.me?.leagueMember?.membership_id && (
                <IconButton
                  aria-label="Delete this message"
                  disabled={Boolean(deletingMessage)}
                  isLoading={deletingMessage === m.message_id}
                  onClick={async () => {
                    setDeletingMessage(m.message_id);
                    try {
                      await deleteMessage({variables: {messageId: m.message_id}});
                      await refetchMessages();
                    } catch (e) {
                      console.error(e);
                    }
                    setDeletingMessage(undefined);
                  }}
                >
                  <CloseIcon width="12px" height="12px" />
                </IconButton>
              )}
            </Flex>
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
