import {useSession} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';
import {LoginPage} from '@src/modules/login/LoginPage';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, router.query, session]);

  if (!session) {
    return <LoginPage />;
  }

  return null;
};

export default Login;
