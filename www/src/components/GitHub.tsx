import React from 'react'
import {theme} from '../../theme'
import {GitHubIcon} from '../assets/icons'
import {Box} from './Box'
import {Flex} from './Flex'

export const GitHubLink = () => {
  return (
    <>
      <Box css={{color: theme.colors.arena}}>
        <Flex
          css={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '6px'}}
        >
          <GitHubIcon />
          <p>View on GitHub</p>
        </Flex>
      </Box>
    </>
  )
}
