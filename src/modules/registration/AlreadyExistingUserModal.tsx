import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import {useLogout} from '@src/util/logout';
import {useUser} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';
import {Typography} from '../Typography';

type Props = {
  leagueName: string;
};

export function AlreadyExistingUserModal({leagueName}: Props) {
  const router = useRouter();
  const user = useUser();

  const onClose = () => {
    router.push('/');
  };

  const {logout} = useLogout();

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        router.back();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Typography.H2>You are already a member</Typography.H2>
        </ModalHeader>
        <ModalBody>
          <Typography.Body1>
            You are registered for {leagueName} as {user?.email}. If you are trying to register with
            a different email, please log out, then use that email to log in.
          </Typography.Body1>
        </ModalBody>
        <ModalFooter>
          <Flex w="100%" justify="space-between">
            <Button
              variant="outline"
              onClick={() => {
                onClose();
              }}
            >
              Home
            </Button>
            <Button
              variant="solid"
              onClick={() => {
                logout();
              }}
            >
              Log Out
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
