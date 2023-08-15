import FuntimePage from '@src/FuntimePage';
import {PicksContent} from '@src/components/pick/PicksContent';
import {GetStaticPaths, GetStaticProps} from 'next';
import {getApolloClient} from '@src/graphql';
import {gql} from '@apollo/client';
import {UnfinishedLeaguesQuery, UnfinishedLeaguesQueryVariables} from '@src/generated/graphql';
import {SEASON} from '@src/util/config';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {FuntimeLoading} from '@src/components/shared/FuntimeLoading';

const UnfinishedLeagues = gql`
  query UnfinishedLeagues($currentSeason: Int!) {
    leagues(where: {season: {gte: $currentSeason}}) {
      id
      league_id
      season
      status
    }
  }
`;

function PickPage() {
  const router = useRouter();
  const leagueId = router.query['leagueId'];
  console.log('router.query', router.query);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (leagueId && !Number(leagueId)) {
        console.log('leagueId?', leagueId);
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

export default PickPage;
