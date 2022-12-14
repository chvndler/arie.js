import React from 'react'
import Head from 'next/head'
import {Arie} from '../../../dist'
const Index = () => {
  return (
    <>
      <Head>
        <title>Arie.</title>
      </Head>
      <main>
        <div className="center__content">
          <h1>ARIE®</h1>
          <Arie />
        </div>
      </main>
    </>
  )
}

export default Index
