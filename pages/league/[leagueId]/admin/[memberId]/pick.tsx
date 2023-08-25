import {PicksContent} from '@src/components/pick/PicksContent';
import {FuntimePage} from '@src/FuntimePage';
import {useRouter} from 'next/router';

export default function AdminPickPage() {
  const router = useRouter();
  const leagueIdParam = router.query['leagueId'];
  const memberIdParam = router.query['memberId'];

  const leagueId = Number(leagueIdParam);
  const memberId = Number(memberIdParam);

  return (
    <FuntimePage>
      <PicksContent leagueId={leagueId} memberId={memberId} />
    </FuntimePage>
  );
}
