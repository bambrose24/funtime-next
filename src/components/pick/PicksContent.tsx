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
  const {
    data: weekForPicks,
    loading: gamesLoading,
    error: gamesError,
    refetch: gamesRefetch,
  } = useWeekForPicksQuery({
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
      weekForPicks?.weekForPicks?.leagueMember?.picks
        ?.map(p => (typeof p.winner === 'number' ? p.winner : undefined))
        .filter(Boolean) ?? []
    ) as Set<number>;
    return s;
  }, [weekForPicks]);

  if (gamesLoading || leagueLoading) {
    return <FuntimeLoading />;
  }

  if (!weekForPicks || gamesError || !leagueData) {
    console.error(gamesError);
    return <FuntimeError />;
  }

  if (!leagueData?.league?.viewer?.membership_id) {
    router.push('/');
    return <FuntimeLoading />;
  }

  if (
    !weekForPicks.weekForPicks.week ||
    !weekForPicks.weekForPicks.season ||
    !(weekForPicks.weekForPicks.games.length > 0)
  ) {
    // TODO show a "the season is over" page
    return <FuntimeSeasonOver />;
  }
  const week = weekForPicks.weekForPicks.games[0].week;
  const season = weekForPicks.weekForPicks.games[0].season;

  const isImpersonating = Boolean(memberId);

  const gamesSorted = _([...weekForPicks.weekForPicks.games])
    .sortBy('gid')
    .sortBy('ts')
    .value();

  return (
    <Flex justify="center">
      <Box maxWidth="min(100%, 500px)" bgColor="white" p={4}>
        <Box textAlign="center">
          <Typography.H2>
            {existingWinners.size > 0 ? `Update` : `Make`} Your Picks for Week {week}, {season}
          </Typography.H2>
          <Flex direction="column" w="100%" justify="center" bgColor="white" py={8} px={4}>
            <PicksForm
              week={week}
              season={season}
              games={gamesSorted}
              leagueId={leagueId}
              memberId={weekForPicks.weekForPicks.leagueMember?.membership_id ?? null}
              isImpersonating={isImpersonating}
              username={weekForPicks.weekForPicks.leagueMember?.people?.username ?? ''}
              existingWinners={existingWinners}
              onSuccess={async () => {
                await gamesRefetch();
              }}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
