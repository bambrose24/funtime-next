import {useSession} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';
import {LoginPage} from '@src/components/login/LoginPage';
import {useEffect} from 'react';

const Login = () => {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session) {
      if ('redirectTo' in router.query) {
        const redirectTo = router.query['redirectTo'];
        router.push({pathname: redirectTo as string});
      } else {
        router.push('/');
      }
    }
  }, [router, router.query, session]);

  if (!session) {
    return <LoginPage />;
  }

  return null;
};

export default Login;
