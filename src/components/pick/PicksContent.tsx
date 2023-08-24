import {Box, Flex} from '@chakra-ui/react';
import {PicksForm} from '@src/components/pick/PicksForm';
import {Typography} from '@src/components/Typography';
import {useLeagueQuery, useWeekForPicksQuery} from '@src/generated/graphql';
import {LEAGUE_ID} from '@src/util/config';
import _ from 'lodash';
import {useRouter} from 'next/router';
import {useMemo} from 'react';
import {FuntimeError} from '../shared/FuntimeError';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {FuntimeSeasonOver} from '../shared/FuntimeSeasonOver';

type Props = {
  leagueId: number;
  memberId?: number;
};

export function PicksContent({leagueId, memberId}: Props) {
  const router = useRouter();
  const weekParam = router.query['week'];
  const overrideParam = router.query['override'];
  const {data: games, loading: gamesLoading, error: gamesError} = useWeekForPicksQuery({
    variables: {
      leagueId,
      ...(memberId !== undefined ? {memberId} : {}),
      ...(typeof weekParam === 'string' ? {week: parseInt(weekParam)} : {}),
      ...(typeof overrideParam === 'string' && overrideParam === 'true' ? {override: true} : {}),
    },
  });
  const {loading: leagueLoading, data: leagueData} = useLeagueQuery({variables: {leagueId}});

  const existingWinners = useMemo(() => {
    const s = new Set(
      games?.me?.picks
        ?.map(p => (typeof p.winner === 'number' ? p.winner : undefined))
        .filter(Boolean) ?? []
    ) as Set<number>;
    return s;
  }, [games]);

  if (gamesLoading || leagueLoading) {
    return <FuntimeLoading />;
  }

  if (!games || gamesError || !leagueData) {
    console.error(gamesError);
    return <FuntimeError />;
  }

  if (!leagueData?.league?.viewer?.membership_id) {
    router.push('/');
    return <FuntimeLoading />;
  }

  if (
    !games.weekForPicks.week ||
    !games.weekForPicks.season ||
    !(games.weekForPicks.games.length > 0)
  ) {
    // TODO show a "the season is over" page
    return <FuntimeSeasonOver />;
  }
  const week = games.weekForPicks.games[0].week;
  const season = games.weekForPicks.games[0].season;

  const gamesSorted = _([...games.weekForPicks.games])
    .sortBy('gid')
    .sortBy('ts')
    .value();

  return (
    <Flex justify="center">
      <Box maxWidth="min(100%, 800px)" bgColor="white" p={4}>
        <Box textAlign="center">
          <Typography.H2>
            Make Your Picks for Week {week}, {season}
          </Typography.H2>
          <Flex direction="column" w="100%" justify="center" bgColor="white" py={8} px={4}>
            <PicksForm
              week={week}
              season={season}
              games={gamesSorted}
              leagueId={leagueId}
              existingWinners={existingWinners}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
