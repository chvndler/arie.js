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
 * PointerValue
 * -----------------------------------------------------------------------------------------------*/

type CursorProps = {
  /**
   * The window object.
   */
  window?: Window
  document?: Document
  className?: string
}

type component = JSX.Element

const PointerValue = () => {
  const [value, setValue] = React.useState('arie.js')

  React.useEffect(() => {
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

const PointerData = ({...props}: CursorProps): component => {
  return (
    <div {...props} className={'--arie-pointer-value'}>
      <PointerValue />
    </div>
  )
}

////////////////////////////////////////
const useArieCursor = PointerData
//////////////////////////////////////

export {
  //
  useArieCursor
}
