import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {Signin} from './Signin';
import {Signup} from './Signup';

type AuthProps = {
  initialState?: AuthState;
};

const authStates = ['sign_in', 'signup'] as const;
type AuthState = typeof authStates[number];

export function Auth({initialState}: AuthProps) {
  const [tabIndex, setTabIndex] = useState(authStates.indexOf(initialState ?? 'sign_in'));

  return (
    <Tabs
      variant="soft-rounded"
      defaultIndex={tabIndex}
      onChange={index => {
        setTabIndex(index);
      }}
    >
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
