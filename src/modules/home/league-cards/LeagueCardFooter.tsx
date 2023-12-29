import {Alert, AlertDescription, AlertProps, Flex} from '@chakra-ui/react';
import {HomeQuery} from '@src/generated/graphql';
import {LeagueMenu} from '@src/modules/shared/LeagueMenu';
import moment from 'moment';

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
    alertDescription = `The next game starts ${timeTilNextGameFormatted}. Don't forget to make your picks!`;
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
          <AlertDescription>{alertDescription}</AlertDescription>
        </Alert>
      )}
      <Flex w="100%" justify="end">
        <LeagueMenu member={member} menuButtonLabel="League" />
      </Flex>
    </Flex>
  );
}
