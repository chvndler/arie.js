import { useState, useEffect } from 'react';

/**
 * @description
 * Creates a function that generates a formatted string of text(numbers) displaying the current pointer
 * coordinates and(or) scroll data.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This package is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use of this package.
 *
 * https://github.com/chvndler
 * Copyright © 2022. CDC® All rights reserved.
 **/
export const useArieCursor = () => {
  const [value, setValue] = useState<string>('X: 00000, Y: 00000');

  useEffect(() => {
    const format = (num: number, pad = 5): string =>
      num.toString().padStart(pad, '0');

    const setFromEvent = (event: MouseEvent): void => {
      const x = format(event.clientX);
      const y = format(event.clientY);
      setValue(`X: ${x}, Y: ${y}`);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return value;
};

/**
 * @description
 * Creates a function that generates a formatted string of text(numbers) displaying the current pointer
 * coordinates.
 *
 *
 * @returns {string} - string
 * A string containing the cursor's position and the dot's size.
 *
 * @example
 * import { useCursorValue } from 'arie-js';
 *
 * const Component = () => {
 *   const cursorValue = useCursorValue();
 *
 *  // ...
 *
 * return (
 *  <div>
 *   <p>{cursorValue}</p>
 * </div>
 * )
 * }
 */
