import App from 'next/app'
import React from 'react'
import Head from 'next/head'

import '../styles/reset.css'
import '../styles/ek-mono.css'
import '../styles/lateral.css'

class ArieApp extends App {
 render() {
  const {Component, pageProps} = this.props
  return (
   <>
    <Head>
     <link rel='icon' type='image/x-icon' href='/favicon.ico' />
     <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Component {...pageProps} />
   </>
  )
 }
}

export default ArieApp
