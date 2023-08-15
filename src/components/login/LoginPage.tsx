import {Auth} from '@supabase/auth-ui-react';
import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {Alert, AlertDescription, AlertIcon, Box, Divider, Flex} from '@chakra-ui/react';
import FuntimePage from '@src/FuntimePage';
import {useAuthTheme} from './util';
import {Typography} from '../Typography';
import {useRouter} from 'next/router';
import {env} from '@src/util/config';

const LoginPage = () => {
  const supabase = useSupabaseClient();
  const authTheme = useAuthTheme();
  const router = useRouter();
  const authRedirect =
    (window ?? {})?.location?.href ?? `https://www.play-funtime.com${router.asPath}`;
  return (
    <FuntimePage>
      <Flex justify="center" w="100%">
        <Box w={{base: '80vw', md: '400px'}}>
          <LoginBanner />
          <Typography.H1>Login</Typography.H1>
          <Typography.Body1 mt="20px">
            Login with your email below. You will get an email with a link to sign in.
          </Typography.Body1>
          <Divider my="20px" />
          <Auth
            redirectTo={authRedirect}
            supabaseClient={supabase}
            appearance={{theme: authTheme}}
            view={env === 'development' ? 'sign_in' : 'magic_link'}
            showLinks={false}
            providers={[]}
            magicLink
          />
          {env === 'development' && (
            <>
              <Typography.H3>Dev Only -- Signup</Typography.H3>
              <Auth
                redirectTo={authRedirect}
                supabaseClient={supabase}
                appearance={{theme: authTheme}}
                view="sign_up"
                showLinks={false}
                providers={[]}
                magicLink
              />
            </>
          )}
        </Box>
      </Flex>
    </FuntimePage>
  );
};

function LoginBanner() {
  const router = useRouter();
  const banner = router.query.banner;
  if (!banner || typeof banner !== 'string') {
    return null;
  }
  switch (banner) {
    case 'registration':
      return (
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            You must log in with an email to register for the league. Please enter your email below
            to log in, then re-visit the registration link.
          </AlertDescription>
        </Alert>
      );
  }
  return null;
}

export default LoginPage;
