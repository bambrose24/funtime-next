import {StandingsPage} from '@src/components/season/StandingsPage';
import {FuntimeError} from '@src/components/shared/FuntimeError';
import FuntimePage from '@src/FuntimePage';
import {useRouter} from 'next/router';

export default function SeasonPage() {
  const router = useRouter();
  const leagueIdParam = router.query.leagueId;

  const leagueId =
    leagueIdParam && typeof leagueIdParam === 'string' ? parseInt(leagueIdParam) : undefined;
  return (
    <FuntimePage>{leagueId ? <StandingsPage leagueId={leagueId} /> : <FuntimeError />}</FuntimePage>
  );
}
