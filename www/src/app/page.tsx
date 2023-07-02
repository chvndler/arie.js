import React from 'react'
import {PageLayout} from '@/components/core'
import HomePage from '@/components/core/home'
import {TrackArie} from '@/components/TrackArie'

const AppIndex = () => {
  return (
    <>
      <PageLayout type={'Production'}>
        <HomePage>
          <TrackArie />
        </HomePage>
      </PageLayout>
    </>
  )
}

export default AppIndex
