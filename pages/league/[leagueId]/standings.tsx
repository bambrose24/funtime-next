import {StandingsPage} from '@src/modules/season/StandingsPage';
import {FuntimeError} from '@src/modules/shared/FuntimeError';
import {FuntimePage} from '@src/FuntimePage';
import {useRouter} from 'next/router';

export default function LeagueStandings() {
  const router = useRouter();
  const leagueIdParam = router.query.leagueId;

  const leagueId =
    leagueIdParam && typeof leagueIdParam === 'string' ? Number(leagueIdParam) : undefined;
  return (
    <FuntimePage>{leagueId ? <StandingsPage leagueId={leagueId} /> : <FuntimeError />}</FuntimePage>
  );
}
