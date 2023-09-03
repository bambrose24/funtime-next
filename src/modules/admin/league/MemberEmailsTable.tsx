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
  Th,
  Tr,
  Thead,
  Table,
  Tbody,
  TableContainer,
  Td,
} from '@chakra-ui/react';
import {useMemberEmailsQuery} from '@src/generated/graphql';
import {Typography} from '@src/modules/Typography';
import moment from 'moment';
import {useState} from 'react';

const _MemberEmails = gql`
  query MemberEmails($member_id: Int!) {
    leagueMember(where: {membership_id: $member_id}) {
      EmailLogs {
        ts
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

export function MemberEmailsTable({
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
      <TableContainer pt="12px" overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Subject</Th>
              <Th>Time</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {data?.leagueMember?.EmailLogs?.map(e => {
              if (!e.email) {
                return null;
              }
              const {email} = e;
              const emailHtml = email.html;
              return (
                <Tr key={email.id}>
                  <Td>
                    <Typography.Body1>{email.subject}</Typography.Body1>
                  </Td>
                  <Td>
                    {e.ts
                      ? moment(e.ts)
                          .tz('America/New_York')
                          .format('MMM D YYYY, h:mm A z')
                      : ''}
                  </Td>
                  <Td>
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
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
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
