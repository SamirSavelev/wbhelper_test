'use client';

import type { NextPage } from 'next';
import { PropsWithChildren } from '@/src/types/global';
import Providers from '@/src/components/Providers';
import MainContainer from '@/src/containers/MainContainer';
import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  authInitialState,
  selectCredentials,
  setCredentials,
} from '../features/auth/auth-slice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <MainContainer>
            <Header />
            {children}
          </MainContainer>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
