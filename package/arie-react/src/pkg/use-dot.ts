import { useState, useEffect } from 'react';
import { type CursorDot, type CursorDotPosition } from '../types';

const useArieDot = ({
  dotSize = 10,
}: CursorDot): [CursorDotPosition, number] => {
  const [cursorPosition, setCursorPosition] = useState<CursorDotPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [cursorPosition, dotSize];
};

export default useArieDot;

/**
 *
 * @description
 * Render a dot at the cursor's position.
 *
 * @param {number} [dotSize=10] - The size of the dot.
 *
 * @returns {array} - array
 * An array containing the cursor's position and the dot's size.
 *
 *
 */

/**
 *
 * @example
 *
 * import React from 'react';
 * import useArieDot from './useArieDot';
 *
 * const App = () => {
 *  const [cursorPosition, dotSize] = useArieDot({ dotSize: 10 });
 *
 * return (
 * <div>
 * <p>X: {cursorPosition.x}</p>
 * <p>Y: {cursorPosition.y}</p>
 * <p>Dot Size: {dotSize}</p>
 * </div>
 * );
 * };
 *
 * export default App;
 *
 */
