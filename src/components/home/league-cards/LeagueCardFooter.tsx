import {ChevronDownIcon} from '@chakra-ui/icons';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {HomeQuery, LeagueStatus, MemberRole} from '@src/generated/graphql';
import moment from 'moment';
import {useRouter} from 'next/router';

export type LeagueCardFooterProps = {
  member: NonNullable<HomeQuery['me']>['leaguemembers'][number];
};

export function LeagueCardFooter({member}: LeagueCardFooterProps) {
  const router = useRouter();
  const nextGame = member.nextGame;

  const needsToMakePicks = nextGame && !member.hasPickedNextGame;

  let alertStatus: AlertProps['status'] | undefined = undefined;
  let alertDescription: string | undefined = undefined;

  if (needsToMakePicks) {
    const timeTilNextGame = moment(nextGame.ts);
    const timeTilNextGameFormatted = timeTilNextGame.fromNow();
    alertDescription = `The next week starts in ${timeTilNextGameFormatted}. Don't forget to make your picks!`;
    if (timeTilNextGame.isBefore(moment().add(3, 'hour'))) {
      alertStatus = 'warning';
    } else if (timeTilNextGame.isBefore(moment().add(14, 'days'))) {
      alertStatus = 'info';
    }
  }
  return (
    <Flex direction="column" gap="8px">
      {alertStatus && alertDescription && (
        <Alert status={alertStatus}>
          <AlertIcon />
          <AlertDescription>{alertDescription}</AlertDescription>
        </Alert>
      )}
      <Flex w="100%" justify="end">
        <Menu>
          <MenuButton as={Button} variant="outline" rightIcon={<ChevronDownIcon />}>
            League
          </MenuButton>
          <MenuList>
            {member.role === MemberRole.Admin && (
              <MenuItem
                onClick={() => {
                  router.push(`/league/${member.leagues.league_id}/admin`);
                }}
              >
                Manage League (admin only)
              </MenuItem>
            )}
            <MenuItem
              onClick={() => {
                router.push(`/league/${member.leagues.league_id}/standings`);
              }}
            >
              Standings
            </MenuItem>
            {/* <MenuItem
              onClick={() => {
                router.push(`/league/${member.leagues.league_id}/edit-profile`);
              }}
            >
              Edit Profile
            </MenuItem> */}
            {member.leagues.status !== LeagueStatus.NotStarted && (
              <MenuItem
                onClick={() => {
                  router.push(`/league/${member.leagues.league_id}/week`);
                }}
              >
                Weekly Picks
              </MenuItem>
            )}
            {member.leagues.status !== LeagueStatus.Done && (
              <MenuItem
                onClick={() => {
                  router.push(`/league/${member.leagues.league_id}/pick`);
                }}
              >
                Make Picks
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
