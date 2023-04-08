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

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={getApolloClient()}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light" />
        {children}
      </ChakraProvider>
    </ApolloProvider>
  );
};

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  if (typeof window !== "undefined") {
    LogRocket.init("5gvyus/funtime");
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
