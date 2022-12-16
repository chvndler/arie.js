import React from 'react'

import {useArie} from '../../../dist'
import {theme} from '../../theme'
// import {useArie} from 'arie-js'
import {Box} from './Box'
import {TreeIcon} from '../assets/icons/TreeIcon'

export const ArieTrack = () => {
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
        {/*
        <Box
          id="right-eye"
          className="eye"
          css={{
            padding: 12,
            borderRadius: 50,
          }}
        >
        */}
        <TreeIcon id="right-eye" className="eye" />
        <Box
          className={'pupil'}
          css={{
            transform: rotateRightEye,
            height: 6,
            width: 20,
            borderRadius: 4,
            backgroundColor: theme.colors.slateA10,
            boxShadow: `0 0 6px 1px ${theme.colors.heliotrope}`,
          }}
        />
      </Box>
      {/* </Box> */}
    </>
  )
}
