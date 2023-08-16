import {LeagueRegistration} from '@src/components/registration';
import {FuntimeError} from '@src/components/shared/FuntimeError';
import {
  LeagueRegistrationDocument,
  LeagueRegistrationQuery,
  LeagueRegistrationQueryVariables,
} from '@src/generated/graphql';
import {FuntimePage} from '@src/FuntimePage';
import {getApolloClient} from '@src/graphql';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';

type Props = {
  league: LeagueRegistrationQuery;
};

export default function LeagueRegister({league}: Props) {
  const router = useRouter();
  const leagueCode = router.query['league-code'];
  console.log('league???', league);

  if (!(typeof leagueCode === 'string')) {
    return (
      <FuntimePage>
        <FuntimeError />
      </FuntimePage>
    );
  }

  return (
    <FuntimePage
      meta={{
        title: `${
          league.league?.name
            ? `Register for ${league.league.name} on Funtime`
            : `Register for a league on Funtime`
        }`,
        description: `You're invited to register for ${
          league?.league?.name ? `${league.league.name} on Funtime` : 'a league on Funtime'
        }`,
      }}
    >
      <LeagueRegistration leagueCode={leagueCode} />
    </FuntimePage>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({params}) => {
  const leagueCode = params?.['league-code'];

  if (!leagueCode || !(typeof leagueCode === 'string')) {
    return {
      notFound: true,
    };
  }
  const client = getApolloClient();
  const {data: league} = await client.query<
    LeagueRegistrationQuery,
    LeagueRegistrationQueryVariables
  >({
    query: LeagueRegistrationDocument,
    variables: {
      leagueCode,
    },
  });

  return {
    props: {league},
  };
};
