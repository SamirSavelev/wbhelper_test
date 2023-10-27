'use client';

import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import StyledComponentsRegistry from '@/src/lib/registry';
import { store, persistor } from '@/src/store';
import { PropsWithChildren } from '@/src/types/global';
import theme from '@/src/theme';
import AuthProvider from '../AuthProvider';

const Providers: NextPage<PropsWithChildren> = ({ children }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider>{children}</AuthProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default Providers;
