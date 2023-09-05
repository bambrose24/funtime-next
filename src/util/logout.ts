import {useApolloClient} from '@apollo/client';
import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';

export function useLogout() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const graphqlClient = useApolloClient();

  const logout = async () => {
    supabase.auth.signOut();
    graphqlClient.clearStore();
    router.push('/login');
  };

  return {
    logout,
  };
}
