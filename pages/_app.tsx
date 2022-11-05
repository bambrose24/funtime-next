import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ReactNode, useState } from "react";
import { client } from "@src/graphql";
import MetaTags from "@src/meta/MetaTags";
import { Analytics } from "@vercel/analytics/react";

import theme from "@src/util/theme";
import {
  createBrowserSupabaseClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
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
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
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
