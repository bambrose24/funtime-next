import {FuntimePage} from '@src/FuntimePage';
import WeekContent from '@src/modules/week/WeekContent';
import {GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {FuntimeError} from '@src/modules/shared/FuntimeError';

export default function LeagueWeekPage() {
  const router = useRouter();
  const leagueIdParam = router.query.leagueId as string;
  const leagueId = Number(leagueIdParam);
  if (!leagueId) {
    return (
      <FuntimePage>
        <FuntimeError />
      </FuntimePage>
    );
  }
  return (
    <FuntimePage>
      <WeekContent leagueId={leagueId} />
    </FuntimePage>
  );
}
