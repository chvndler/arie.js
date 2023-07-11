import React from 'react';
import useArieDot from './use-dot';

export const ArieDot = () => {
  const [cursorPosition, dotSize] = useArieDot({ dotSize: 10 });

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          backgroundColor: 'red',
        }}
      />
    </>
  );
};
