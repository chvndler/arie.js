import React from 'react'
import {useArie} from './arie'

const ArieDefault = (): JSX.Element => {
 const cursor = useArie()
 const {x, y} = cursor.position.client
 const {x: pageX, y: pageY} = cursor.position.page
 const {x: screenX, y: screenY} = cursor.position.screen

 return (
  <>
   <p>
    Client_ {x}, {y}
   </p>
   <p>
    Page_ {pageX}, {pageY}
   </p>
   <span>
    SCREEN_ {screenX}, {screenY}
   </span>
  </>
 )
}

export const Arie = ArieDefault
