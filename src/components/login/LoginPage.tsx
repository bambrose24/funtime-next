import {Auth} from '@supabase/auth-ui-react';
import {useSession, useSupabaseClient} from '@supabase/auth-helpers-react';
import {Box, Divider, Flex} from '@chakra-ui/react';
import FuntimePage from '@src/FuntimePage';
import {useAuthTheme} from './util';
import {Typography} from '../Typography';
import {ThemeSupa} from '@supabase/auth-ui-shared';

const LoginPage = () => {
  const supabase = useSupabaseClient();

  const authTheme = useAuthTheme();

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
            supabaseClient={supabase}
            appearance={{theme: authTheme}}
            view="magic_link"
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
