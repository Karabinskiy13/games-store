import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout/Layout';
import { GlobalStyles } from '../styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default App;
