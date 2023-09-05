import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';

export function useLogout() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const logout = async () => {
    supabase.auth.signOut();
    router.push('/login');
  };

  return {
    logout,
  };
}
