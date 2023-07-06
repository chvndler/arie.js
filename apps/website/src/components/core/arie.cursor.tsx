

'use client';
import React from 'react';

import { useArieCursor } from 'arie';

export const CursorArie = () => {
  const cursorValue = useArieCursor();

  return (
    <>
      <p>
        <span style={{ color: 'red' }}>Cursor Value: </span>
        <span style={{ color: 'blue' }}>{cursorValue}</span>
      </p>
    </>
  );
};
