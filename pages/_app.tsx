import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from "next/head";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - лучший топ</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
