import React, { useState, useEffect } from 'react';

interface CursorDotProps {
  dotSize?: number;
}

const CursorDot: React.FC<CursorDotProps> = ({ dotSize = 10 }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: cursorPosition.y - dotSize / 2,
        left: cursorPosition.x - dotSize / 2,
        width: dotSize,
        height: dotSize,
        borderRadius: '50%',
        backgroundColor: 'blue',
        pointerEvents: 'none', // Make the dot not interfere with mouse events
        zIndex: 9999, // Ensure the dot stays on top of other elements
      }}
    />
  );
};

export default CursorDot;
