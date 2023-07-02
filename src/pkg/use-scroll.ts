import { useEffect, useState } from 'react';
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

/* -------------------------------------------------------------------------------------------------
 * ScrollValue
 * -----------------------------------------------------------------------------------------------*/

interface scrollProps {
  /**
   * The window object.
   */
  window: Window;
  /**
   * The document object.
   */
  document: Document;
  /**
   * className for custom styling..
   */
  className?: string;
}

const scrollFrac = ({ window, document }: scrollProps) => {
  return Math.min(window.scrollY / (document.body.offsetHeight - 770), 0.999);
};

export const useScroll = () => {
  const [value, setValue] = useState('0000');

  useEffect(() => {
    const format = (num: string, pad = 4) => num.toString().padStart(pad, '0');

    const setFromScroll = () => {
      const y = scrollFrac({ window, document });
      setValue(`SCROLL: 0.${format(y.toFixed(3), 2)}`);
    };

    window.addEventListener('scroll', setFromScroll);

    return () => {
      window.removeEventListener('scroll', setFromScroll);
    };
  }, []);

  return { value };
};
