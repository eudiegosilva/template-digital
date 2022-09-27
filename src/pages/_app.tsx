import type { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';

const name = 'diego';

console.log(name);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
