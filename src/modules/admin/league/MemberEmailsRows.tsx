import {gql} from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Skeleton,
  Stack,
} from '@chakra-ui/react';
import {useMemberEmailsQuery} from '@src/generated/graphql';
import {Typography} from '@src/modules/Typography';
import {useState} from 'react';

const _MemberEmails = gql`
  query MemberEmails($member_id: Int!) {
    leagueMember(where: {membership_id: $member_id}) {
      EmailLogs {
        email {
          bcc
          cc
          created_at
          from
          html
          id
          last_event
          reply_to
          subject
          text
          to
        }
      }
    }
  }
`;

export function MemberEmailsRows({
  memberId,
  skeletonCount,
}: {
  memberId: number;
  skeletonCount: number;
}) {
  const {data} = useMemberEmailsQuery({
    variables: {member_id: memberId},
  });
  const [html, setHtml] = useState<string | null>(null);
  const closeModal = () => setHtml(null);

  return (
    <>
      <Stack gap="4px" direction="column">
        {!data &&
          [...Array(skeletonCount)].map((_, i) => {
            return <Skeleton key={i} w="100%" h="24px" />;
          })}
        {data?.leagueMember?.EmailLogs?.map(e => {
          if (!e.email) {
            return null;
          }
          const {email} = e;
          const emailHtml = email.html;
          return (
            <Flex key={email.id} justify="space-between">
              <Typography.Body1>{email.subject}</Typography.Body1>
              {emailHtml ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    setHtml(emailHtml);
                  }}
                >
                  View Email
                </Button>
              ) : (
                <Box />
              )}
            </Flex>
          );
        })}
      </Stack>
      {html && (
        <Modal isOpen={!!html} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Email Content</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <iframe srcDoc={html} width="100%" height="400px" frameBorder="0"></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
