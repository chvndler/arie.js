import React from 'react'

import {useArie} from '../../../dist'

export const EyesFollow = () => {
  const {
    selectedElement: {
      position: {angle: angleLeftEye},
    },
  } = useArie(true, 'left-eye', {x: 20, y: 20})
  const {
    selectedElement: {
      position: {angle: angleRightEye},
    },
  } = useArie(true, 'right-eye', {x: 20, y: 20})

  const rotateLeftEye = `rotate(${-angleLeftEye}deg)`
  const rotateRightEye = `rotate(${-angleRightEye}deg)`

  return (
    <div className="eyes-follow">
      <div className="eyes">
        <div id="left-eye" className="eye" style={{transform: rotateLeftEye}}>
          <div className="pupil" />
        </div>
        <div id="right-eye" className="eye" style={{transform: rotateRightEye}}>
          <div className="pupil" />
        </div>
      </div>
    </div>
  )
}

