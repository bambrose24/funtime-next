import {FuntimePage} from '@src/FuntimePage';
import {PicksContent} from '@src/components/pick/PicksContent';
import {gql} from '@apollo/client';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {FuntimeLoading} from '@src/components/shared/FuntimeLoading';

export default function PickPage() {
  const router = useRouter();
  const leagueId = router.query['leagueId'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (leagueId && !Number(leagueId)) {
        router.push('/');
      }
    }
  }, [leagueId, router]);

  if (!leagueId || !(typeof leagueId === 'string') || !Number(leagueId)) {
    return (
      <FuntimePage>
        <FuntimeLoading />
      </FuntimePage>
    );
  }
  return (
    <FuntimePage>
      <PicksContent leagueId={Number(leagueId)} />
    </FuntimePage>
  );
}
