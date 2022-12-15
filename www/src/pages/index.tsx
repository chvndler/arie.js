import React from 'react'
import Head from 'next/head'
import {ArieLogo} from '../assets/ArieLogo'
import {Space} from '../components/Space'
import {useArie} from 'arie-js'

const Index = () => {
  const cursor = useArie()
  const {x, y} = cursor.position.client
  const {x: pageX, y: pageY} = cursor.position.page
  const {x: screenX, y: screenY} = cursor.position.screen

  return (
    <>
      <Head>
        <title>Arie.</title>
      </Head>
      <main>
        <div className="center__content">
          <ArieLogo />
          <Space />
          <span>
            (x).00.{x} -- (y).00.{y}
          </span>
        </div>
      </main>
    </>
  )
}

export default Index
