

'use client';
import React from 'react';

import { useArieScroll } from 'arie';

export const ScrollArie = () => {
  const scroll = useArieScroll();

  return (
    <>
      <p>
        <span style={{ color: 'red' }}>Scroll Value: </span>
        <span style={{ color: 'blue' }}>{scroll}</span>
      </p>
    </>
  );
};
