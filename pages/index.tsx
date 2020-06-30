import Head from 'next/head';
import React from 'react';
import Home from '../src/components/Home';

export default () => {

  return (
    <>
      <Head>
        <title>MVP blog</title>
      </Head>
      <Home />
    </>
  );
};
