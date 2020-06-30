import Head from 'next/head';
import React from 'react';
import Home from '../src/components/Home';
import { Navbar } from '../src/components/Navbar';

export default () => {

  return (
    <>
      <Head>
        <title>MVP blog</title>
      </Head>
      <Navbar />
      <Home />
    </>
  );
};
