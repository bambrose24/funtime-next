import {LeaguesHome} from '@src/components/home/LeaguesHome';
import {FuntimeStandardRules} from '@src/components/shared/FuntimeStandardRules';
import {FuntimePage} from '@src/FuntimePage';
import {useUser} from '@supabase/auth-helpers-react';

export default function Home() {
  const user = useUser();
  return <FuntimePage>{user ? <LeaguesHome /> : <FuntimeStandardRules />}</FuntimePage>;
}
