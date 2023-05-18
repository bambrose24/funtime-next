import {Auth} from '@supabase/auth-ui-react';
import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {Box, Divider, Flex} from '@chakra-ui/react';
import FuntimePage from '@src/FuntimePage';
import {useAuthTheme} from './util';
import {Typography} from '../Typography';
import {useRouter} from 'next/router';
import {env} from '@src/util/config';

const LoginPage = () => {
  const supabase = useSupabaseClient();
  const authTheme = useAuthTheme();
  const router = useRouter();

  return (
    <FuntimePage>
      <Flex justify="center" w="100%">
        <Box w={{base: '80vw', md: '400px'}}>
          <Typography.H1>Login</Typography.H1>
          <Typography.Body1 mt="20px">
            Login with your email below. You'll get an email with a link to sign in.
          </Typography.Body1>
          <Divider my="20px" />
          <Auth
            redirectTo={router.asPath}
            supabaseClient={supabase}
            appearance={{theme: authTheme}}
            view={env === 'development' ? 'sign_in' : 'magic_link'}
            showLinks={false}
            providers={['google', 'apple']}
            magicLink
          />
        </Box>
      </Flex>
    </FuntimePage>
  );
};
export default LoginPage;
