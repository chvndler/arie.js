import React from 'react'

import {useArie} from '../../../dist'
// import {useArie} from 'arie-js'
import {Box} from './Box'

export const TrackArie = () => {
  const {
    selectedElement: {
      position: {angle: angleRightEye},
    },
  } = useArie(true, 'right-eye', {x: 0, y: 0})

  const rotateRightEye = `rotate(${-angleRightEye}deg)`

  return (
    <>
      <Box
        css={{
          display: 'flex',
          alignItems: 'flex-end',
          margin: 'auto',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          id="right-eye"
          className="eye"
          css={{
            //ctransform: rotateRightEye,
            padding: 12,
            borderRadius: 50,
            // sborder: '1px solid lightgray',
          }}
        >
          <Box
            className={'pupil'}
            css={{
              transform: rotateRightEye,
              height: 2,
              width: 14,
              backgroundColor: 'white',
              borderRadius: 4,
              boxShadow: '0 0 6px 1px #BFC1C8',
            }}
          />
        </Box>
      </Box>
    </>
  )
}
