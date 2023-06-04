import '../style/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Raspberry - B & A</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


