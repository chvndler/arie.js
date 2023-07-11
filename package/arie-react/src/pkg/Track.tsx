import React from 'react';
import useArie from './use-arie';
import { type Cursor } from '../types';

export const Arie = (props: Cursor) => {
  const cursor = useArie();

  if (props.position.client) {
    return (
      <>
        {cursor.position.client.x}, {cursor.position.client.y}
      </>
    );
  }

  if (props.position.page) {
    return (
      <>
        {cursor.position.page.x}, {cursor.position.page.y}
      </>
    );
  }

  if (props.position.screen) {
    return (
      <>
        {cursor.position.screen.x}, {cursor.position.screen.y}
      </>
    );
  } else {
    return null;
  }
};
