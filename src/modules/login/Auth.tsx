import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useTabsConfig} from '@src/hooks/useTabsConfig';
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
  const {TabName} = useTabsConfig();

  return (
    <Tabs
      variant="soft-rounded"
      defaultIndex={tabIndex}
      onChange={index => {
        setTabIndex(index);
      }}
    >
      <TabList>
        <Tab>
          <TabName>Log In</TabName>
        </Tab>
        <Tab>
          <TabName>Sign Up</TabName>
        </Tab>
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
