import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import {ReactNode} from 'react';

import theme from '@src/util/theme';
import {Session} from '@supabase/auth-helpers-nextjs';
import {SessionContextProvider, useUser} from '@supabase/auth-helpers-react';
import {supabase} from '@src/user/supabase';
import {getApolloClient} from '@src/graphql';
import {ApolloProvider} from '@apollo/client';
import LogRocket from 'logrocket';
import {AnalyticsProvider} from '@src/analytics/AnalyticsProvider';
import { env } from '@src/util/config';

const Providers: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <ApolloProvider client={getApolloClient()}>
      <AnalyticsProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode="light" />
          {children}
        </ChakraProvider>
      </AnalyticsProvider>
    </ApolloProvider>
  );
};

function MyApp({Component, pageProps}: AppProps<{initialSession: Session}>) {
  const user = useUser();
  if (typeof window !== 'undefined') {
    if (env === 'production' && process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && user && user.email !== 'bambrose24@gmail.com') {
      LogRocket.init('5gvyus/funtime');
    }
  }

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps?.initialSession}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </SessionContextProvider>
  );
}

export default MyApp;
