import {LeagueRegistration} from '@src/components/registration';
import {FuntimeError} from '@src/components/shared/FuntimeError';
import {Typography} from '@src/components/Typography';
import FuntimePage from '@src/FuntimePage';
import {useRouter} from 'next/router';

export default function LeagueRegister() {
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
    <FuntimePage>
      <LeagueRegistration leagueCode={leagueCode} />
    </FuntimePage>
  );
}
