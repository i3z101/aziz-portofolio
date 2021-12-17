import '../styles/globals.css';
import '../styles/nav.css';
import '../styles/header.css';
import '../styles/about.css';
import '../styles/services.css';
import '../styles/skills.css';
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
      <Head>
        <title>AZIZ</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Aziz Portofolio"/>
        <meta name="keywords" content="HTML, CSS, JavaScript, Programming, Coding, Cloud Computing, front-end, back-end, application development, web development"/>
        <meta name="author" content="Abdulaziz Baqaleb"/>
      </Head>
      <Component {...pageProps} />
    </Fragment>
}

export default MyApp
