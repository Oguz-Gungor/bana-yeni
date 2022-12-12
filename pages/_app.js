import Head from "next/head";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import "../styles/component.css";
import "../styles/layout.css";

import PageLayout from "../components/layout/PageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bana Yeni</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

export default MyApp;
