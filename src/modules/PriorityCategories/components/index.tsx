import Flex from '@/src/ui-kit/Flex';
import Text from '@/src/ui-kit/Text';
import { NextPage } from 'next';
import React from 'react';

interface Props {
  id: number;
  title: string;
}
const Category: NextPage<Props> = ({ id, title }) => {
  return (
    <Flex
      flexDirection="row"
      width="100%"
      height="80px"
      padding="10px 0px"
      justifyContent="flex-start"
      alignItems="center"
      gap="20px"
    >
      <Flex width="50px" justifyContent="center" alignItems="center">
        <Text pattern="body2">{id}</Text>
      </Flex>
      <Flex flexDirection="row" width="100%" justifyContent="flex-start">
        <Text pattern="body2">{title}</Text>
      </Flex>
    </Flex>
  );
};

export default Category;
