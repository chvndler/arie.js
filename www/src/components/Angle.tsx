import React from 'react';

import {useArie} from '../../../dist';

export const Angle = () => {
  const {
    selectedElement: {
      position: { angle },
    },
  } = useArie(true, 'trackElement');
  return (
    <div className="mouse-angle">
      <div className="title">Circle around 🧀</div>
      <div className="angle">
        <div className="header">Mouse Angle</div>
        <div className="row">{angle ? <div>{angle.toFixed(0)}°</div> : <div>0°</div>}</div>
      </div>
      <div id="trackElement">🧀</div>
    </div>
  );
};