import {Alert, AlertDescription, AlertIcon, Button, Flex} from '@chakra-ui/react';
import {LeaguesHome} from '@src/modules/home/LeaguesHome';
import {FuntimeStandardRules} from '@src/modules/shared/FuntimeStandardRules';
import {Typography} from '@src/modules/Typography';
import {FuntimePage} from '@src/FuntimePage';
import {useUser} from '@supabase/auth-helpers-react';
import Link from 'next/link';

export default function Home() {
  const user = useUser();
  return (
    <FuntimePage>
      {user ? (
        <LeaguesHome />
      ) : (
        <Flex justify="center" w="100%">
          <Flex direction="column" maxWidth="3xl" gap="12px">
            <Alert status="info">
              <AlertDescription>
                <Flex direction="column" w="100%" alignItems="start" gap="20px">
                  <Typography.H4>
                    Already registered?{' '}
                    <Link href="/login" style={{textDecoration: 'underline'}}>
                      Login
                    </Link>
                  </Typography.H4>
                </Flex>
              </AlertDescription>
            </Alert>
            <FuntimeStandardRules />
          </Flex>
        </Flex>
      )}
    </FuntimePage>
  );
}
