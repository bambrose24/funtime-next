import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import MetaTags from "../src/meta/MetaTags";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = extendTheme({});
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
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
