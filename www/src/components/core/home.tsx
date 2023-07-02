'use client'

import React from 'react'

function HomePage({children}: {children: React.ReactNode}) {
  return (
    <>
      <section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            zIndex: 20,
            width: '100vw',
            margin: 'auto'
          }}
        >
          {children}
        </div>
      </section>
    </>
  )
}

export default HomePage
