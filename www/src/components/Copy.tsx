import * as React from 'react'
import {Box} from './Box'
import {Flex} from './Flex'
import {Container} from './Container'
import {IconButton} from './IconButton'
import {CheckIcon, CopyIcon} from '../assets/icons'

import copy from 'copy-to-clipboard'
import {theme} from '../../theme'

export const CopyToClipboard = () => {
  const [hasCopied, setHasCopied] = React.useState(false)

  return (
    <Container css={{position: 'absolute', bottom: 120, left: 0, right: 0}}>
      <Flex
        css={{
          maxWidth: '100%',
          boxShadow: ` 0 0 10px 2px ${theme.colors.honeySuckle}`,
          border: `1px solid ${theme.colors.chxn2}`,
          borderRadius: 10,
          lineHeight: 1,
          alignItems: 'center',
          color: theme.colors.chxn4,
          backgroundColor: 'rgba(0,0,0,.06)',
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 12,
          paddingRight: 5,
          justifyContent: 'space-between',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,.04)'
          }
        }}
      >
        <Box css={{marginRight: 22}}>npm install --save arie-js</Box>

        <IconButton
          as='button'
          css={{
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.chxn2}`,
            color: theme.colors.chxn3,
            marginLeft: 22,
            borderRadius: 6,
            height: 'auto',

            '&:hover': {
              backgroundColor: 'rgba(0,0,0,.1)'
            }
          }}
          aria-label='Copy the install snippet to Clipboard'
          onClick={() => {
            copy('npm install --save arie-js')
            setHasCopied(true)
          }}
        >
          <Box css={{color: theme.colors.chxn3}}>{hasCopied ? <CheckIcon /> : <CopyIcon />}</Box>
        </IconButton>
      </Flex>
    </Container>
  )
}
