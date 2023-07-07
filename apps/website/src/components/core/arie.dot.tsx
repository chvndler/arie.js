'use client';

import React from 'react';
import { useArieDot } from 'arie-js';

export const DotArie = () => {
  useArieDot({ dotSize: 10 });

  const dotSize = 10;

  return (
    <>
      <div>
        <div
          className='dot'
          style={{
            position: 'absolute',
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
