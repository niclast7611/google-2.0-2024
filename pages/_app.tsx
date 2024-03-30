import Head from "next/head";
import Layout from "../app/layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const progress = new ProgressBar({
    size: 4,
    color: "#1d4ed8",
    className: "z-50",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return (
    <Layout>
      <Head>
        <title>Google 2.0</title>
        <meta name="Google Clone" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
