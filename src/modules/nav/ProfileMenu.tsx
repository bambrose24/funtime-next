import {gql} from '@apollo/client';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {LogoutOutlined} from '@mui/icons-material';
import {useMeQuery} from '@src/generated/graphql';
import {useLogout} from '@src/util/logout';
import {useSession, useSupabaseClient} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';
import {Typography} from '../Typography';

const _MeQuery = gql`
  query Me {
    me {
      id
      uid
      email
      username
      leagues {
        id
        league_id
        name
      }
    }
  }
`;

export function ProfileMenu() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  return (
    <Flex align="center">
      {session ? (
        <MenuPopover />
      ) : (
        <Button
          variant="outline"
          colorScheme="whiteAlpha"
          onClick={async () => {
            if (session) {
              await supabase.auth.signOut();
            }
            router.push({pathname: '/login', query: {}});
          }}
        >
          <Typography.Body1 color="white">Log In</Typography.Body1>
        </Button>
      )}
    </Flex>
  );
}

function MenuPopover() {
  const {data} = useMeQuery();
  const {logout} = useLogout();
  const supabase = useSupabaseClient();
  const router = useRouter();

  if (!data || !data.me) {
    return (
      <Button
        variant="outline"
        colorScheme="whiteAlpha"
        onClick={async () => {
          await supabase.auth.signOut();
          router.push({pathname: '/login', query: {}});
        }}
      >
        <Typography.Body1 color="white">Log Out</Typography.Body1>
      </Button>
    );
  }

  console.log('username?', data.me.username);
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        color="white"
        borderRadius="4px"
        border="1px"
        borderColor="white"
      >
        <Flex gap="8px" align="center">
          <Avatar size="xs" />
          <Typography.Body2>{data.me.username}</Typography.Body2>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            logout();
          }}
        >
          <LogoutOutlined />
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
