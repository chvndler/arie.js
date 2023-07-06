'use client';

import React from 'react';
import { useArie } from 'arie';

export const TrackArie = () => {
  const {
    selectedElement: {
      position: { angle: angle },
    },
  } = useArie(true, 'right', { x: 0, y: 0 });

  const rotate = 'rotate(' + angle + 'deg)';

  return (
    <>
      <section
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          margin: 'auto',
          justifyContent: 'flex-end',
        }}>
        <div
          id='right'
          className='eye'
          style={{
            padding: 12,
            borderRadius: 50,
          }}>
          <div
            className={'pupil'}
            style={{
              transform: rotate,
              height: 6,
              width: 30,
              borderRadius: 4,
              backgroundColor: 'white',
              boxShadow: `0 0 0 2px black`,
            }}
          />
        </div>
      </section>
    </>
  );
};
