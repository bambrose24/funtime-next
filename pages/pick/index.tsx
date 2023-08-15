import FuntimePage from '@src/FuntimePage';
import {PicksContent} from '@src/components/pick/PicksContent';
import {GetServerSideProps, GetStaticProps} from 'next';
import {FuntimeLoading} from '@src/components/shared/FuntimeLoading';
import {getApolloClient} from '@src/graphql';
import {gql} from '@apollo/client';
import {UserLeaguesQuery} from '@src/generated/graphql';

const PickPage: React.FC = () => {
  return (
    <FuntimePage>
      <FuntimeLoading />
    </FuntimePage>
  );
};

const UserLeagues = gql`
  query UserLeagues {
    me {
      id
      leagues(orderBy: {season: desc}) {
        id
        league_id
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const client = getApolloClient();
  const {data} = await client.query<UserLeaguesQuery>({
    query: UserLeagues,
  });
  const firstLeagueId = data.me?.leagues.find(l => l.league_id);
  if (!firstLeagueId) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: `/pick/${firstLeagueId}`,
    },
  };
};

export default PickPage;
