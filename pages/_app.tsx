import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import MetaTags from "../src/meta/MetaTags";

import config from "../src/util/config";
import theme from "../src/util/theme";

const { graphqlEndpoint } = config;

const client = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ApolloProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <MetaTags />
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
