import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {SignUp} from '@supabase/auth-ui-react';
import {useRouter} from 'next/router';
import {useCallback, useMemo, useState} from 'react';
import {Signin} from './Signin';
import {Signup} from './Signup';

type AuthProps = {
  redirectTo: string;
  initialState?: AuthState;
};

const authStates = ['sign_in', 'signup'] as const;
type AuthState = typeof authStates[number];

export function Auth({redirectTo, initialState}: AuthProps) {
  const [authState, setAuthState] = useState<AuthState>(initialState ?? 'sign_in');
  const router = useRouter();

  console.log({authState});
  return (
    <Tabs variant="soft-rounded" defaultIndex={authStates.indexOf(authState)}>
      <TabList>
        <Tab>Log In</Tab>
        <Tab>Sign Up</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Signin />
        </TabPanel>
        <TabPanel>
          <Signup />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
