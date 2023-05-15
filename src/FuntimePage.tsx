import {Box} from '@chakra-ui/react';
import {useSession, useSessionContext} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {ReactNode} from 'react';
import {Nav} from './components/nav/Nav';
import {FuntimeLoading} from './components/shared/FuntimeLoading';

type Props = {children: ReactNode; requiresAuth?: boolean};

const FuntimePage: React.FC<Props> = ({children, requiresAuth}) => {
  const router = useRouter();
  const {error: authError, isLoading: authIsLoading, session} = useSessionContext();
  const isAuthenticated = Boolean(session);
  const needsToLogIn = requiresAuth && !isAuthenticated;
  useEffect(() => {
    if (needsToLogIn) {
      router.push({
        pathname: '/login',
        query: {
          redirect_to: router.pathname,
        },
      });
    }
  }, [needsToLogIn, router]);

  if (needsToLogIn || authIsLoading) {
    return <FuntimeLoading />;
  }

  return (
    <Box bgColor="gray.100" w="100%">
      <Nav />
      <Box minHeight="100vh" py={4} w="100%" px="8px">
        {children}
      </Box>
    </Box>
  );
};

export default FuntimePage;
