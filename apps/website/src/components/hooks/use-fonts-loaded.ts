'use client';

import React from 'react';
import { useAppStore } from './use-app-store';

export const useFontsLoaded = () => {
  React.useEffect(() => {
    const maxWaitTime = 1400; // tweak this as needed.
    const timeout = window.setTimeout(() => {
      onReady();
    }, maxWaitTime);

    const onReady = () => {
      window.clearTimeout(timeout);
      useAppStore.setState({ fontsLoaded: true });
      document.documentElement.classList.add('fonts-loaded');
    };

    try {
      document.fonts.ready
        .then(() => {
          onReady();
        })
        .catch((error: unknown) => {
          console.error(error);
          onReady();
        });
    } catch (error) {
      console.error(error);
      onReady();
    }
  }, []);
};
