import React from 'react'

import {useArie} from '../../../dist'
import {theme} from '../../theme'
// import {useArie} from 'arie-js'
import {Box} from './Box'

export const TrackArie = () => {
  const {
    selectedElement: {
      position: {angle: angle}
    }
  } = useArie(true, 'right-eye', {x: 0, y: 0})

  const rotateHead = `rotate(${-angle}deg)`

  return (
    <>
      <Box
        css={{
          display: 'flex',
          alignItems: 'flex-end',
          margin: 'auto',
          justifyContent: 'flex-end'
        }}
      >
        <Box
          id='right-eye'
          className='eye'
          css={{
            padding: 12,
            borderRadius: 50
          }}
        >
          <Box
            className={'pupil'}
            css={{
              transform: rotateHead,
              height: 6,
              width: 30,
              borderRadius: 4,
              backgroundColor: theme.colors.slateA10,
              boxShadow: `0 0 6px 1px ${theme.colors.heliotrope}`
            }}
          />
        </Box>
      </Box>
    </>
  )
}
