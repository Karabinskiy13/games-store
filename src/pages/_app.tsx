import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { GlobalStyles } from '../styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"></link>
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default App;
