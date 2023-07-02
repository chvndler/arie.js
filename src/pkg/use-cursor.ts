import { useState, useEffect } from 'react';
/**
 *
 * @description
 * Render a string of text displaying
 * pointer coordinates and scroll data.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This package is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use of this package.
 *
 * https://github.com/chvndler
 * Copyright © 2022. CDC® All rights reserved.
 *
 **/

export const useCursor = () => {
  const [value, setValue] = useState('00000');

  useEffect(() => {
    const format = (num: { toString: () => string }, pad = 5) =>
      num.toString().padStart(pad, '0');

    const setFromEvent = (event: {
      clientX: { toString: () => string };
      clientY: { toString: () => string };
    }) => {
      const x = format(event.clientX);
      const y = format(event.clientY);
      setValue(`X: ${x}, Y: ${y}`);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return { value };
};
