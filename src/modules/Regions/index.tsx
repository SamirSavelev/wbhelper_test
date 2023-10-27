import { ArrayItem } from '@/src/features/types';
import Flex from '@/src/ui-kit/Flex';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Region from './components/Region';

interface Props {
  regions: Array<ArrayItem>;
  onChangeRegion(id: number): void;
  selectedRegion: number;
}
const Regions: NextPage<Props> = ({
  regions,
  onChangeRegion,
  selectedRegion,
}) => {
  return (
    <Flex
      flexDirection="row"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      gap="10px"
    >
      {regions.map((region) => (
        <Region
          selected={selectedRegion === region.id}
          onClick={() => onChangeRegion(region.id)}
          {...region}
        />
      ))}
    </Flex>
  );
};

export default Regions;
