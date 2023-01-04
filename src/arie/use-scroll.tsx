import * as React from 'react'
import {DataString} from './styles'
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
  window: Window
  /**
   * The document object.
   */
  document: Document
  /**
   * className for custom styling..
   */
  className?: string
}

type component = JSX.Element

const scrollFraction = ({window, document}: scrollProps) => {
  /**
   * i dont know what this does.
   */
  return Math.min(window.scrollY / (document.body.offsetHeight - 770), 0.999)
}

const ScrollValue = () => {
  /**
   * useState (can be used to set the initial value of the state)
   * default is 'traxx©'
   */
  const [value, setValue] = React.useState('traxx©')

  React.useEffect(() => {
    /**
     *
     * @param num
     * @param pad
     * @returns a string of numbers and leading zeros.
     */
    const format = (num: number | string, pad = 4) => {
      return num.toString().padStart(pad, '0')
    }

    const setFromScroll = () => {
      const y = scrollFraction({window, document})
      /**
       * @returns `SCROLL: 0.000`
       */
      setValue(`SCROLL: 0.${format(y.toFixed(3), 2)}`)
    }

    window.addEventListener('scroll', setFromScroll)

    return () => {
      window.removeEventListener('scroll', setFromScroll)
    }
  }, [])

  /**
   *
   * @returns {value}.
   * This component renders a string of numbers displaying
   * scroll position on the page.
   *
   */

  return (
    <DataString>
      <span>{value}</span>
    </DataString>
  )
}

/**
 *
 * @returns {component}.
 * <span> - A decimal value for each X and Y axis.
 *
 * Pass this component to a parent for styling.
 *
 */

const ScrollData = ({...props}: scrollProps): component => {
  return (
    <div {...props} className={'--arie-scroll-value'}>
      <ScrollValue />
    </div>
  )
}

////////////////////////////////////////
const useArieScroll = ScrollData
//////////////////////////////////////

export {
  //
  useArieScroll
}
