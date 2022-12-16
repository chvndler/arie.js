import React from 'react'
import {theme} from '../../theme'
import {GitHubIcon} from '../assets/icons'
import {Box} from './Box'
import {Button} from './Button'

export const GitHubLink = () => {
  return (
    <>
      <Box css={{color: theme.colors.arena}}>
        <Button size={'icon'} css={{display: 'flex', gap: '5px'}}>
          <GitHubIcon />
          {` `}View on GitHub
        </Button>
      </Box>
    </>
  )
}
