import {Alert, AlertDescription, AlertIcon, Button, Flex} from '@chakra-ui/react';
import {LeaguesHome} from '@src/components/home/LeaguesHome';
import {FuntimeStandardRules} from '@src/components/shared/FuntimeStandardRules';
import {Typography} from '@src/components/Typography';
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
        <Flex direction="column" maxWidth="3xl" gap="12px">
          <Alert status="info">
            <AlertDescription>
              <Flex direction="column" w="100%" alignItems="start" gap="20px">
                <Typography.H4>
                  Want to play in 2023?{' '}
                  <Link
                    href="/register/jA1SH2cR3BqjnD3bE1Bdr"
                    style={{textDecoration: 'underline'}}
                  >
                    Register for 2023
                  </Link>
                </Typography.H4>
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
      )}
    </FuntimePage>
  );
}
