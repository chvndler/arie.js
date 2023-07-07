import React from 'react';
import { PageLayout } from '@/components/core';
import HomePage from '@/components/core/home';
import { TrackArie } from '@/components/core/arie.tracker';
// import { ScrollArie } from '@/components/core/arie.scroll';
// import { CursorArie } from '@/components/core/arie.cursor';

const AppIndex = () => {
  return (
    <>
      <PageLayout type={'Production'}>
        <HomePage>
          <TrackArie />
        </HomePage>
      </PageLayout>
    </>
  );
};

export default AppIndex;
