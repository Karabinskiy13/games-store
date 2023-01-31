import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import '../styles/NavBar.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default App;
