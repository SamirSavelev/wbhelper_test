'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { NextPage } from 'next';
import { PropsWithChildren } from '../types/global';
import GlobalStyles from '../styles/GlobalStyles';

const StyledComponentsRegistry: NextPage<PropsWithChildren> = ({
  children,
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return (
      <>
        <GlobalStyles />
        {styles}
      </>
    );
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyles />
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
