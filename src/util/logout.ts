import {useApolloClient} from '@apollo/client';
import {useSupabaseClient} from '@supabase/auth-helpers-react';

export function useLogout() {
  const supabase = useSupabaseClient();
  const graphqlClient = useApolloClient();

  const logout = async () => {
    supabase.auth.signOut().then(() => {
      graphqlClient.clearStore().then(() => {
        window.location.href = '/login';
      });
    });
  };

  return {
    logout,
  };
}
