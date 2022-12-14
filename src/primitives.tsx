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
