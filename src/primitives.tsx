import * as React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
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
 * PointerValue
 * -----------------------------------------------------------------------------------------------*/

const PointerValue = () => {
  const [value, setValue] = useState('traxx©')

  useEffect(() => {
    const format = (num: number | string, pad = 4) => {
      return num.toString().padStart(pad, '0')
    }
    const setFromEvent = (event: {clientX: number | string; clientY: number | string}) => {
      const x = format(event.clientX, 5)
      const y = format(event.clientY, 5)
      setValue(`X: ${x}, Y: ${y}`)
    }

    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  /**
   *
   * @returns {value}. - A decimal value for each X and Y axis.
   * This component renders a string of numbers displaying
   * pointer coordinates and event data.
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

const PointerData = () => {
  return (
    <div className={'--traxx-pointer-value'}>
      <PointerValue />
    </div>
  )
}

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
}

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
  const [value, setValue] = useState('traxx©')

  useEffect(() => {
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

const ScrollData = () => {
  return (
    <div className={'--traxx-scroll-value'}>
      <ScrollValue />
    </div>
  )
}

const StyledString = styled.p`
  font-family: monospace;
  font-size: 1rem;
  font-weight: 600;
`

const DataString = StyledString

////////////////////////////////////////
const ArieCursor = PointerData
const ArieScroll = ScrollData
//////////////////////////////////////

export {
  //
  ArieCursor,
  //
  ArieScroll,
}
