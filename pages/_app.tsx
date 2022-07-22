import type { AppProps } from "next/app";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import MetaTags from "../src/meta/MetaTags";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
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
