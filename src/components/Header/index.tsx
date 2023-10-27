import React from 'react';
import { NextPage } from 'next';
import Flex from '@/src/ui-kit/Flex';
import Link from './components/Link';
import { leftNavList, rightNavList } from './config';
import Logo from '@/src/assets/logo.svg';
import BellIcon from '@/src/assets/bell.svg';
import ChevronIcon from '@/src/assets/chevron.svg';
import ava from '@/src/assets/ava.jpeg';
import { headerStyles } from './styles';

const { Ava } = headerStyles;
const Header: NextPage = () => {
  return (
    <Flex
      flexDirection="row"
      width="100%"
      height="100px"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection="row"
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="center"
        maxWidth="1300px"
        gap="30px"
      >
        <Logo />
        <Flex
          flexDirection="row"
          width="100%"
          height="100%"
          justifyContent="space-between"
        >
          <Flex
            flexDirection="row"
            width="max-content"
            height="100%"
            justifyContent="flex-start"
            alignItems="center"
            gap="30px"
          >
            {leftNavList.map((link) => (
              <Link {...link} />
            ))}
          </Flex>
          <Flex
            flexDirection="row"
            width="max-content"
            height="100%"
            justifyContent="flex-start"
            alignItems="center"
            gap="30px"
          >
            {rightNavList.map((link) => (
              <Link {...link} />
            ))}
            <BellIcon />
            <Flex alignItems="center">
              <Ava alt="ava" src={ava?.src} width={50} height={50} />
              <ChevronIcon />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
