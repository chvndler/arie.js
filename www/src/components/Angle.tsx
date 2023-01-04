import React from 'react'

import {useArie} from '../../../dist'
// import {useArie} from 'arie-js'
import {Box} from './Box'

export const AngleArie = () => {
  const {
    selectedElement: {
      position: {angle}
    }
  } = useArie(true, 'trackElement')

  return (
    <>
      <div className='row'>{angle ? <div>{angle.toFixed(0)}°</div> : <div>0°</div>}</div>
      <Box
        css={{
          border: '1px solid lightgray',
          borderRadius: 8,
          paddingLeft: 12,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          width: '60px',
          display: 'flex',
          alignItems: 'center',
          margin: 'auto',
          justifyContent: 'center'
        }}
      >
        <Box css={{}}>{angle ? <div>{angle.toFixed(0)}°</div> : <div>0°</div>}</Box>
        <Box id={'trackElement'} />
      </Box>
    </>
  )
}
