import {StandingsPage} from '@src/components/season/StandingsPage';
import {FuntimeError} from '@src/components/shared/FuntimeError';
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
