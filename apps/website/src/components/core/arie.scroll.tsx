'use client';
import { useArieScroll } from 'arie-js';

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
