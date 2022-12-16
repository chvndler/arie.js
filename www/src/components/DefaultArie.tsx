import React from 'react'
import {styled} from '@stitches/react'
import {useArie} from '../../../dist'
// import {useArie} from 'arie-js'
import {Flex} from './Flex'
import {Box} from './Box'

export const DefaultArie = () => {
  const {
    position: {client},
  } = useArie()
  return (
    <>
      <Flex>
        <StyledBadge>
          <Box css={{marginRight: 10}}>X.{client.x && client.x.toExponential(2)}</Box>
          <Box css={{marginLeft: 10}}>Y.{client.y && client.y.toPrecision(6)}</Box>
        </StyledBadge>
      </Flex>
    </>
  )
}

const styledBadge = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 5,
  paddingBottom: 5,
  margin: 'auto',
  // border: '1px solid lightgray',
  borderRadius: 8,
  backgroundColor: 'transparent',
})

const StyledBadge = styled(styledBadge)
