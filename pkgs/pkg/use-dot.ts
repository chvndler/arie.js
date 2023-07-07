import { useState, useEffect } from 'react';
import type { CursorDot, CursorDotPosition } from '../types';

export const useArieDot = ({
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
 * @example
 * import { useCursorDot } from 'arie-js';
 *
 * const Component = () => {
 *    useCursorDot({ dotSize: 10 });
 *
 *   // ...
 *
 *  return (
 *   <div>
 *    <div
 *      className="dot"
 *     style={{
 *      position: 'absolute',
 *      top: cursorPosition.y,
 *      left: cursorPosition.x,
 *      width: dotSize,
 *      height: dotSize,
 *      borderRadius: '50%',
 *      backgroundColor: 'black',
 *      zIndex: 9999
 *    }}
 *  />
 *  </div>
 * )
 * }
 */
