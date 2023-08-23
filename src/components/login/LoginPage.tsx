import {Auth} from '@supabase/auth-ui-react';
import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {Alert, AlertDescription, AlertIcon, Box, Divider, Flex} from '@chakra-ui/react';
import {FuntimePage} from '@src/FuntimePage';
import {useAuthTheme} from './util';
import {Typography} from '../Typography';
import {useRouter} from 'next/router';

export function LoginPage() {
  const supabase = useSupabaseClient();
  const authTheme = useAuthTheme();
  const router = useRouter();
  const authRedirect = `https://www.play-funtime.com${router.asPath}`;
  const loginBanner = useLoginBanner();

  return (
    <FuntimePage>
      <Flex justify="center" w="100%">
        <Box w={{base: '80vw', md: '400px'}} layerStyle="funtime-card">
          <LoginBanner />
          <Typography.H1>Log In</Typography.H1>
          <Divider my="20px" />
          <Auth
            redirectTo={authRedirect}
            supabaseClient={supabase}
            appearance={{theme: authTheme}}
            view={loginBanner === 'registration' ? 'sign_up' : 'sign_in'}
            magicLink
            providers={[]}
          />
        </Box>
      </Flex>
    </FuntimePage>
  );
}

const loginBanners = ['registration'] as const;
type LoginBanner = typeof loginBanners[number];

function useLoginBanner(): LoginBanner | null {
  const router = useRouter();
  const banner = router.query.banner;
  if (!banner || typeof banner !== 'string' || !loginBanners.includes(banner as LoginBanner)) {
    return null;
  }
  return banner as LoginBanner;
}

function LoginBanner() {
  const banner = useLoginBanner();
  switch (banner) {
    case 'registration':
      return (
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            You must sign up with an email and password to play Funtime this year. Create your
            Funtime account below.
          </AlertDescription>
        </Alert>
      );
  }
  return null;
}
