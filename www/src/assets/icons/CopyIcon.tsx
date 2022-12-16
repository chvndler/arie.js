import React from 'react'
import type {IconProps} from './types'




export const CopyIcon = ({color, ...props}: IconProps) => {
 return (
  <>
   <svg
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    {...props}>
<path d="M17,20c1.7,0,3-1.3,3-3V7c0-1.7-1.3-3-3-3h-3c-1.7,0-3,1.3-3,3v2.4h3.4c1.4,0,2.6,1.2,2.6,2.6s-1.2,2.6-2.6,2.6H11V17
	c0,1.7,1.3,3,3,3H17z"/>
<path d="M9.3,15.5c-0.4,0.4-1.1,0.4-1.6,0L5,12.8c-0.4-0.4-0.4-1.1,0-1.6l2.9-2.9c0.4-0.4,1.1-0.4,1.6,0c0.4,0.4,0.4,1.1,0,1.6l-1,1
	h5.9c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1H8.5l0.8,0.8C9.7,14.4,9.7,15,9.3,15.5z"/>
</svg>
  </>
 )
}