'use client';
import { ArieCursorPosition, useArie } from 'arie-js';

export const CursorArie = () => {
  const {
    position: { client },
  } = useArie();
  return (
    <div>
      <p>
        Cursor: {client.x ?? 0}, {client.y ?? 0}
      </p>
      <ArieCursorPosition />
    </div>
  );
};
