import React from 'react'
import type {IconProps} from './types'

export const CheckIcon = ({...props}: IconProps) => {
 return (
  <>
   <svg
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M17.3,5.9c0.5-0.6,1.4-0.6,1.9-0.1c0.6,0.5,0.6,1.4,0.1,1.9l-8.8,9.9c-0.3,0.3-0.6,0.4-1,0.5
	c-0.4,0-0.7-0.1-1-0.4l-4.4-4.4c-0.5-0.5-0.5-1.4,0-1.9c0.5-0.5,1.4-0.5,1.9,0l3.4,3.4L17.3,5.9z"/>
  </svg>
  </>
 )
}