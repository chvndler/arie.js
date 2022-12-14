import React from 'react'

import {useArie} from '../../../dist'

export const Default = () => {
  const {
    position: {client},
  } = useArie()
  return (
    <div className="default">
      Cursor position
      <div className="row">
        x: <div>{client.x && client.x.toFixed(0)}</div>
      </div>
      <div className="row">
        y: <div>{client.y && client.y.toFixed(0)}</div>
      </div>
    </div>
  )
}

