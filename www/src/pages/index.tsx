import React from 'react'
import Head from 'next/head'
import {ArieLogo} from '../assets/ArieLogo'
import {VersionBadge} from '../components/VersionBadge'
import {Container} from '../components/Container'
import {Canvas} from '../components/Canvas'
import {DefaultArie} from '../components/DefaultArie'
import {Box} from '../components/Box'
import {TrackArie} from '../components/TrackArie'
import {GitHubLink} from '../components/GitHub'
import {Space} from '../components/Space'
import {PassLink} from '../components/PassLink'
import {ToClipboard} from '../components/CopyToClipboard'

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
            <Box css={{marginLeft: 10}}>
              <ArieLogo />
            </Box>

            <DefaultArie />

            <Space size={'1'} />
            <ToClipboard />
            <Space size={'2'} />
            <PassLink href={'https://github.com/chvndler/arie.js'}>
              <GitHubLink />
            </PassLink>
          </Container>
        </Canvas>

        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            zIndex: 20,
            width: '100vw',
            margin: 'auto',
          }}
        >
          <TrackArie />
        </Box>
      </main>
    </>
  )
}

export default Index
