import {Avatar, Button, HStack, Tooltip, useBreakpointValue} from '@chakra-ui/react';
import {Typography} from '../Typography';
import Link from 'next/link';

const UserTag = (props: {user_id: number; username: string}) => {
  const profile_url = '/profile/' + props.user_id;

  const isMobile = useBreakpointValue({base: true, lg: false});

  return (
    <Tooltip label={props.username} aria-label="A user badge">
      <Link href={profile_url}>
        <Button
          size="sm"
          borderRadius="25px"
          border="2px solid"
          borderColor="gray.200"
          px={2}
          bg="white"
        >
          <HStack>
            <Avatar size="xs" name={props.username} />;
            <Typography.Subtitle1
              overflow={{base: 'hidden', lg: 'initial'}}
              textOverflow={{base: 'ellipsis', lg: 'initial'}}
              pl={0}
              color="black"
            >
              {isMobile
                ? props.username.length > 8
                  ? `${props.username.substring(0, 8)}...`
                  : props.username.substring(0, 8)
                : props.username}
            </Typography.Subtitle1>
          </HStack>
        </Button>
      </Link>
    </Tooltip>
  );
};
export default UserTag;
