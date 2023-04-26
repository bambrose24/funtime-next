import {Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex} from '@chakra-ui/react';
import {PicksForm} from '@src/components/pick/PicksForm';
import {Typography} from '@src/components/Typography';
import {useFindLeagueMembersQuery, useFirstNotStartedWeekQuery} from '@src/generated/graphql';
import {LEAGUE_ID, SEASON} from '@src/util/config';
import {useUser} from '@supabase/auth-helpers-react';
import _ from 'lodash';
import {useRouter} from 'next/router';
import {FuntimeError} from '../shared/FuntimeError';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {FuntimeSeasonOver} from '../shared/FuntimeSeasonOver';

export const PicksContent: React.FC = () => {
  const router = useRouter();
  const weekParam = router.query['week'];
  const overrideParam = router.query['override'];
  const {
    data: games,
    loading: gamesLoading,
    error: gamesError,
  } = useFirstNotStartedWeekQuery({
    variables: {
      ...(typeof weekParam === 'string' ? {week: parseInt(weekParam)} : {}),
      ...(typeof overrideParam === 'string' && overrideParam === 'true' ? {override: true} : {}),
    },
  });

  const {
    data: people,
    loading: peopleLoading,
    error: peopleError,
  } = useFindLeagueMembersQuery({
    variables: {
      league_id: LEAGUE_ID,
    },
  });

  if (gamesLoading || peopleLoading) {
    return <FuntimeLoading />;
  }

  if (!games || !people || gamesError || peopleError) {
    return <FuntimeError />;
  }

  if (
    !games.firstNotStartedWeek.week ||
    !games.firstNotStartedWeek.season ||
    !(games.firstNotStartedWeek.games.length > 0)
  ) {
    // TODO show a "the season is over" page
    return <FuntimeSeasonOver />;
  }
  const week = games.firstNotStartedWeek.games[0].week;
  const season = games.firstNotStartedWeek.games[0].season;

  const gamesSorted = _([...games.firstNotStartedWeek.games])
    .sortBy('gid')
    .sortBy('ts')
    .value();

  const peopleSorted = _([...people.leagueMembers])
    .orderBy(x => x.people.username.toUpperCase())
    .value();

  return (
    <Flex justify="center">
      <Box maxWidth="min(100%, 800px)" bgColor="white" p={4}>
        <Box textAlign="center">
          <Typography.H2>
            Make Your Picks for Week {week}, {season}
          </Typography.H2>
          <Flex direction="column" w="100%" justify="center" bgColor="white" py={8} px={4}>
            {week === 18 && season === SEASON && (
              <Box py="8px">
                <Alert status="warning">
                  <AlertIcon />
                  <AlertDescription>
                    Game times have changed, and some players have made picks already. We are
                    keeping the tiebreaker game as ARI @ SF even though it's not the final game.
                  </AlertDescription>
                </Alert>
              </Box>
            )}
            <PicksForm week={week} season={season} games={gamesSorted} users={peopleSorted} />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
