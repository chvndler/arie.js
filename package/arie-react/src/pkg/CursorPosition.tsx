import React from 'react';
import useArieCursor from './use-cursor';

export const ArieCursorPosition = () => {
  const { xValue, yValue } = useArieCursor();

  return (
    <>
      <p>X: {xValue}</p>
      <p>Y: {yValue}</p>
    </>
  );
};
