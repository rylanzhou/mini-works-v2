import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Rylan&apos;s Mini Pages</title>
      </Head>
    </>
  );
}

export default MyApp;
