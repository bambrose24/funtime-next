import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { client } from "@src/graphql";
import MetaTags from "@src/meta/MetaTags";

import theme from "@src/util/theme";

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <MetaTags />
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
