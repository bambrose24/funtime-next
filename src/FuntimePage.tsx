import {Box} from '@chakra-ui/react';
import {useSession, useSessionContext} from '@supabase/auth-helpers-react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {ReactNode} from 'react';
import {Nav} from './modules/nav/Nav';
import {FuntimeLoading} from './modules/shared/FuntimeLoading';
import {useFullHeightWithoutNav} from './hooks/useFullHeightWithoutNav';

type Props = {children: ReactNode; requiresAuth?: boolean, meta?: Meta};

type Meta = {
  title?: string;
  description?: string;
}

const META_DEFAULTS = {
  title: 'Funtime',
  description: "An NFL Pick 'em pool",
} satisfies Meta;

function FuntimePage({children, requiresAuth, meta}: Props) {
  const router = useRouter();
  const {isLoading: authIsLoading, session} = useSessionContext();
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

  const bodyHeight = useFullHeightWithoutNav();

  if (needsToLogIn || authIsLoading) {
    return <FuntimeLoading />;
  }

  return (
    <>
      <Head>
        <title>{meta?.title || META_DEFAULTS.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={meta?.description || META_DEFAULTS.description} />
      </Head>
      <Box bgColor="gray.100" w="100%" minH="100vh">
        <Nav />
        <Box minHeight={bodyHeight} py={4} w="100%" px="8px">
          {children}
        </Box>
      </Box>
    </>
  );
}

export {FuntimePage};
