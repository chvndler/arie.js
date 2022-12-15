import React from 'react'
import Head from 'next/head'
import {ArieLogo} from '../assets/ArieLogo'
import {VersionBadge} from '../components/VersionBadge'
import {Container} from '../components/Container'
import {Space} from '../components/Space'
import {Canvas} from '../components/Canvas'
import {DefaultArie} from '../components/DefaultArie'
import {Box} from '../components/Box'

const Index = () => {
  return (
    <>
      <Head>
        <title>Arie.</title>
      </Head>
      <main>
        <Canvas>
          <Container>
            <VersionBadge />
            <Space size={'1'} />
            <Box css={{marginLeft: 10}}>
              <ArieLogo />
            </Box>
            <Space size={'1'} />

            <DefaultArie />
          </Container>
        </Canvas>
      </main>
    </>
  )
}

export default Index
