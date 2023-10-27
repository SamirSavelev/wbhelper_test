import { ArrayItem } from '@/src/features/types';
import Flex from '@/src/ui-kit/Flex';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Region from './components/Region';

interface Props {
  regions: Array<ArrayItem>;
}
const Regions: NextPage<Props> = ({ regions }) => {
  const [selected, setSelected] = useState(0);

  const selectRegion = (id: number) => setSelected(id);
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
          selected={selected === region.id}
          onClick={() => selectRegion(region.id)}
          {...region}
        />
      ))}
    </Flex>
  );
};

export default Regions;
