import React from 'react';
import useAriePosition from './use-position';

export const AriePosition = () => {
  const mousePosition = useAriePosition();

  return <>{JSON.stringify(mousePosition)}</>;
};
