import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import MetaTags from "@src/meta/MetaTags";
import { Analytics } from "@vercel/analytics/react";

import theme from "@src/util/theme";
import { Session } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@src/user/supabase";
import { getApolloClient } from "@src/graphql";
import { ApolloProvider } from "@apollo/client";
import LogRocket from "logrocket";
import config from "@src/util/config";
import { AnalyticsProvider } from "@src/components/analytics/AnalyticsProvider";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={getApolloClient()}>
      <ChakraProvider theme={theme}>
        <AnalyticsProvider>
          <ColorModeScript initialColorMode="light" />
          {children}
        </AnalyticsProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
};

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const { logRocket } = config;
  if (typeof window !== "undefined" && logRocket.enable) {
    LogRocket.init(logRocket.key);
  }

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps?.initialSession}
    >
      <Providers>
        <MetaTags />
        <Component {...pageProps} />
        <Analytics />
      </Providers>
    </SessionContextProvider>
  );
}

export default MyApp;
