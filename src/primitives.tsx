import React from 'react'
import {useArie} from './arie'

import styled from 'styled-components'

const ArieDefault = (): JSX.Element => {
  const cursor = useArie()
  const {x, y} = cursor.position.client
  const {x: pageX, y: pageY} = cursor.position.page
  const {x: screenX, y: screenY} = cursor.position.screen

  return (
    <>
      <ArieContainer>
        <span>
          CLIENT_ {x}, {y}
        </span>
        <span>
          PAGE_ {pageX}, {pageY}
        </span>
        <span>
          SCREEN_ {screenX}, {screenY}
        </span>
      </ArieContainer>
    </>
  )
}

const styledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
  font-family: monospace;
`

/* ---------------------------------- */
export const ArieContainer = styledContainer
/* ---------------------------------- */

export const Arie = ArieDefault

/**
 * 
 * 
 * 
 function pad(str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
}

function digits(myVal, myNumDigits, myPad) {
	var s = myVal.toString();
	while (s.length < myNumDigits) s = '0' + s;	
	return pad(Math.floor(s), myPad);
}

hr = digits(time / 3600, 1, 1);
min = digits(time % 3600 / 60, 2, 2);
sec = digits(time % 60, 2, 2);

"SLP " + hr + ":" + min + ":" + sec;
*
 */
