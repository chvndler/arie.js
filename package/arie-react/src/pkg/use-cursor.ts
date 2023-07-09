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
  const [xValue, setXValue] = useState<string>('00000');
  const [yValue, setYValue] = useState<string>('00000');

  useEffect(() => {
    const format = (num: number, pad = 5): string =>
      num.toString().padStart(pad, '0');

    const setFromEvent = (event: MouseEvent): void => {
      const x = format(event.clientX);
      const y = format(event.clientY);
      setXValue(x);
      setYValue(y);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return { xValue, yValue };
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
 */

/*
import React from 'react';
import { useArieCursor } from './useArieCursor';

const App = () => {
  const { xValue, yValue } = useArieCursor();

  return (
    <div>
      <p>X: {xValue}</p>
      <p>Y: {yValue}</p>
    </div>
  );
};

export default App;

*/
