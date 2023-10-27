import { SubjectPrioritiesInterface } from '@/src/api/wb/types';
import Flex from '@/src/ui-kit/Flex';
import Text from '@/src/ui-kit/Text';
import { NextPage } from 'next';
import React from 'react';

const Category: NextPage<SubjectPrioritiesInterface> = ({
  id,
  name,
  position,
}) => {
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
        <Text pattern="body2">{position}</Text>
      </Flex>
      <Flex flexDirection="row" width="100%" justifyContent="flex-start">
        <Text pattern="body2">{name}</Text>
      </Flex>
    </Flex>
  );
};

export default Category;
