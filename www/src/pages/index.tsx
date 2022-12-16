import React from 'react'
import Head from 'next/head'
import {ArieLogo} from '../assets/ArieLogo'
import {VersionBadge} from '../components/VersionBadge'
import {Container} from '../components/Container'
import {Canvas} from '../components/Canvas'
import {DefaultArie} from '../components/DefaultArie'
import {Box} from '../components/Box'
import {TrackArie} from '../components/TrackArie'
import {AngleArie} from '../components/Angle'
import {Flex} from '../components/Flex'
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

            <Flex
              css={{
                marginTop: 6,
                marginBottom: 6,
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                width: '190px',
              }}
            >
              <AngleArie />
              <TrackArie />
              <AngleArie />
            </Flex>
            <DefaultArie />
            <Space size={'3'} />

            <PassLink href={'https://github.com/chvndler/arie.js'}>
              <GitHubLink />
            </PassLink>
            <Space size={'2'} />
            <ToClipboard />
          </Container>
        </Canvas>
      </main>
    </>
  )
}

export default Index
