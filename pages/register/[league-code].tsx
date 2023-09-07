import {LeagueRegistration} from '@src/modules/registration';
import {FuntimeError} from '@src/modules/shared/FuntimeError';
import {LeagueRegistrationQuery} from '@src/generated/graphql';
import {FuntimePage} from '@src/FuntimePage';
import {useRouter} from 'next/router';

type Props = {
  league: LeagueRegistrationQuery | undefined;
};

export default function LeagueRegister({league}: Props) {
  const router = useRouter();
  const leagueCode = router.query['league-code'];

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
          league?.league?.name
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
