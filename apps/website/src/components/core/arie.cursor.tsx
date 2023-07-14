

'use client';
import React from 'react';

import useArie from 'arie-js';

export const CursorArie = () => {
  const {
    position: { client },
  } = useArie();
  return (
    <div>
      <ArieCursorPosition />
    </div>
  );
};
