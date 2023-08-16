import {gql} from '@apollo/client';
import {StandingsPage} from '@src/components/season/StandingsPage';
import {FuntimeError} from '@src/components/shared/FuntimeError';
import FuntimePage from '@src/FuntimePage';
import {AllLeaguesDocument, AllLeaguesQuery} from '@src/generated/graphql';
import {getApolloClient} from '@src/graphql';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';

const AllLeaguesQueryDoc = gql`
  query AllLeagues {
    leagues {
      id
      league_id
    }
  }
`;

function SeasonPage() {
  const router = useRouter();
  const leagueIdParam = router.query.leagueId;

  const leagueId =
    leagueIdParam && typeof leagueIdParam === 'string' ? parseInt(leagueIdParam) : undefined;
  return (
    <FuntimePage>{leagueId ? <StandingsPage leagueId={leagueId} /> : <FuntimeError />}</FuntimePage>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getApolloClient();
  const {data} = await client.query<AllLeaguesQuery>({
    query: AllLeaguesDocument,
  });
  return {
    fallback: 'blocking',
    paths:
      data?.leagues?.map(league => {
        return `/season/${league.league_id.toString()}`;
      }) ?? [],
  };
};

export default SeasonPage;
