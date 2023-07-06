'use client';

import React from 'react';
import { useArieDot } from 'arie';

export const DotArie = () => {
  const { cursorPosition, dotSize = 10 } = useArieDot();

  return (
    <>
      <div>
        <div
          className='dot'
          style={{
            position: 'absolute',
            top: cursorPosition.y,
            left: cursorPosition.x,
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: 'black',
            zIndex: 9999,
          }}
        />
      </div>
    </>
  );
};
