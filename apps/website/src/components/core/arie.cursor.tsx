

'use client';
import React from 'react';

import { useArieCursor } from 'arie-js';

export const CurserArie = () => {
  const { xValue, yValue } = useArieCursor();

  return (
    <div>
      <p>X: {xValue}</p>
      <p>Y: {yValue}</p>
    </div>
  );
};
