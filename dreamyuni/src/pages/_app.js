import React from 'react';
import { MouseEnterProvider } from '@/components/ui/3d-card';

function MyApp({ Component, pageProps }) {
  return (
    <MouseEnterProvider>
      <Component {...pageProps} />
    </MouseEnterProvider>
  );
}

export default MyApp;