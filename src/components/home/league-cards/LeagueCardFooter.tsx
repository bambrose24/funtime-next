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
import Link from 'next/link';

export type LeagueCardFooterProps = {
  member: NonNullable<HomeQuery['me']>['leaguemembers'][number];
};

export function LeagueCardFooter({member}: LeagueCardFooterProps) {
  const nextGame = member.nextGame;

  const needsToMakePicks = nextGame && !member.hasPickedNextGame;

  let alertStatus: AlertProps['status'] | undefined = undefined;
  let alertDescription: string | undefined = undefined;

  if (needsToMakePicks) {
    const timeTilNextGame = moment(nextGame.ts);
    const timeTilNextGameFormatted = timeTilNextGame.fromNow();
    alertDescription = `The next week starts in ${timeTilNextGameFormatted}.`;
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
      <Flex w="100%" justify="space-between">
        <Link href={`/season/${member.leagues.league_id}`}>
          <Button variant="outline">Standings</Button>
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            League
          </MenuButton>
          <MenuList>
            {member.role === MemberRole.Admin && <MenuItem>Manage League (admin only)</MenuItem>}
            <MenuItem>Standings</MenuItem>
            {member.leagues.status !== LeagueStatus.Done && <MenuItem>Make Picks</MenuItem>}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
