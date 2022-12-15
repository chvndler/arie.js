import React from 'react'
import {styled} from '@stitches/react'
import {useArie} from 'arie-js'
import {Flex} from './Flex'
import {Box} from './Box'

export const DefaultArie = () => {
  const {
    position: {client},
    scroll: {wheelDown, wheelUp},
  } = useArie()
  return (
    <>
      <Flex>
        <StyledBadge>
          <Box css={{marginRight: 10}}>{client.x && client.x.toFixed(3)}</Box>
          <Box css={{marginLeft: 10}}>{client.y && client.y.toFixed(3)}</Box>
        </StyledBadge>
      </Flex>
    </>
  )
}

const styledBadge = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  paddingBottom: 5,
  margin: 'auto',
  border: '2px solid black ',
  borderRadius: 50,
  backgroundColor: 'transparent',
})

const StyledBadge = styled(styledBadge)
