import { useEffect, useState } from 'react';
import { type ScrollProps } from '../types';

/**
 * @description
 * Creates a function that generates a formatted string of text(numbers)
 * displaying the current scroll position.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This package is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use of this package.
 *
 * https://github.com/chvndler
 * Copyright © 2022. CDC® All rights reserved.
 **/

const frac = ({ window, document }: ScrollProps): number => {
  return Math.min(window.scrollY / (document.body.offsetHeight - 770), 0.999);
};

const useArieScroll = (): string => {
  const [value, setValue] = useState<string>('0000');

  useEffect(() => {
    const format = (num: string, pad = 4): string =>
      num.toString().padStart(pad, '0');

    const setFromScroll = (): void => {
      const y = frac({ window, document });
      setValue(`SCR: 0.${format(y.toFixed(3), 2)}`);
    };

    window.addEventListener('scroll', setFromScroll);

    return () => {
      window.removeEventListener('scroll', setFromScroll);
    };
  }, [window, document]);

  return value;
};

export default useArieScroll;

/**
 *
 * @description
 * Creates a function that generates a formatted string of text(numbers) displaying the current scroll
 * position.
 *
 * @returns {string} - string
 * A string containing the scroll position.
 *
 * @example
 * import { useScrollValue } from 'arie-js';
 *
 * const Component = () => {
 *    const scrollValue = useScrollValue();
 *
 *   // ...
 *
 *    return (
 *      <div>
 *       <p>{scrollValue}</p>
 *    </div>
 *   )
 * }
 */
