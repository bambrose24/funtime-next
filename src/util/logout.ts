import {useApolloClient} from '@apollo/client';
import {useSupabaseClient} from '@supabase/auth-helpers-react';

export function useLogout() {
  const supabase = useSupabaseClient();
  const graphqlClient = useApolloClient();

  const logout = async () => {
    await supabase.auth.signOut();
    await graphqlClient.clearStore();
    window.location.href = '/login';
  };

  return {
    logout,
  };
}
