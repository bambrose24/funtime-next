import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Image,
} from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {Typography} from '../Typography';
import {navOptions, useSelectedNavOption} from './types';
import {useSession, useSupabaseClient, useUser} from '@supabase/auth-helpers-react';
import Link from 'next/link';
import {useNavHeight} from '@src/hooks/useNavHeight';
import {ProfileMenu} from './ProfileMenu';
import {LeagueStatus, useHomeQuery} from '@src/generated/graphql';
import {LeagueMenu} from '../shared/LeagueMenu';

export const DesktopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const supabase = useSupabaseClient();
  const session = useSession();

  const height = useNavHeight();

  const bg: FlexProps['bg'] = 'primary';

  const router = useRouter();
  return (
    <>
      <Flex h={height} alignItems="center" bg={bg} w="100%" px={{base: '8px', lg: '24px'}}>
        <Flex justify="space-between" w="100%">
          <Box>
            <HStack spacing={4}>
              <IconButton
                _hover={{bg: 'primary.hover'}}
                color="white"
                bg={bg}
                onClick={() => setIsOpen(true)}
                icon={<MenuIcon />}
                aria-label={'Open menu'}
              />
              <Link href="/">
                <Image
                  cursor="pointer"
                  src="/logo/funtime_full_logo.png"
                  alt="Funtime Logo"
                  height={30}
                  placeholder="blur"
                />
              </Link>
            </HStack>
          </Box>
          <ProfileMenu />
        </Flex>
      </Flex>
      <DesktopNavDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

type DesktopNavDrawerProps = {isOpen: boolean; onClose: () => void};

function DesktopNavDrawer({isOpen, onClose}: DesktopNavDrawerProps) {
  const selectedNavOption = useSelectedNavOption();
  const user = useUser();
  const {data} = useHomeQuery({
    skip: !user?.email,
  });

  const inProgressLeagues =
    data?.me?.leaguemembers.filter(l => l.leagues.status === LeagueStatus.InProgress) ?? [];
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bgColor="gray.100">
        <DrawerHeader borderBottomWidth="1px" bgColor="primary">
          <Flex justify="space-between">
            <Box mt={2}>
              <Image
                src="/logo/funtime_full_logo.png"
                alt="FunTime Logo"
                height={30}
                placeholder="blur"
              />
            </Box>
            <IconButton
              bgColor="primary"
              color="white"
              icon={<CloseIcon />}
              aria-label={'Close menu'}
              _hover={{bgColor: 'primary.hover'}}
              onClick={onClose}
            />
          </Flex>
        </DrawerHeader>
        <Flex px="20px" pt="12px" direction="column" gap="12px">
          {navOptions.map(({href, name, display}) => {
            const selected = name === selectedNavOption;
            return (
              <Link href={href} key={name}>
                <Box
                  role={'group'}
                  p={4}
                  rounded="lg"
                  transition={'all .3s ease'}
                  bgColor={selected ? 'primary' : undefined}
                  color={selected ? 'white' : undefined}
                  _hover={{
                    cursor: 'pointer',
                    backgroundColor: selected ? undefined : 'gray.300',
                  }}
                >
                  <HStack>
                    <Image
                      alt={`Nav option - ${name}`}
                      cursor="pointer"
                      src={
                        '/nav_icons/' + name + (selected ? '_icon_white.png' : '_icon_black.png')
                      }
                      height={5}
                      placeholder="blur"
                      pr={2}
                      mb={1}
                      display="inline-block"
                      verticalAlign="middle"
                    />
                    <Typography.H5
                      display="inline-block"
                      fontWeight={selected ? 'bold' : undefined}
                    >
                      {display}
                    </Typography.H5>
                    <Flex
                      transition={'all .3s ease'}
                      transform={'translateX(-10px)'}
                      opacity={0}
                      _groupHover={{
                        opacity: '100%',
                        transform: 'translateX(0)',
                      }}
                      justify={'flex-end'}
                      align={'center'}
                      flex={1}
                    >
                      {selected ? undefined : <ChevronRightIcon />}
                    </Flex>
                  </HStack>
                </Box>
              </Link>
            );
          })}

          {inProgressLeagues.length === 0 ? null : (
            <>
              <Divider />
              <Typography.H4>Active Leagues</Typography.H4>
              <Flex direction="column" gap="12px" py="4px">
                {inProgressLeagues?.map(member => {
                  return (
                    <LeagueMenu
                      key={member.id}
                      member={member}
                      menuButtonLabel={member.leagues.name}
                      buttonProps={{
                        w: '100%',
                      }}
                    />
                  );
                })}
              </Flex>
            </>
          )}
        </Flex>
      </DrawerContent>
    </Drawer>
  );
}

export function Nav() {
  return <DesktopNav />;
}
