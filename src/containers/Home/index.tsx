import {
  useGetAdvertsQuery,
  useGetCatalogsQuery,
  useGetRegionsQuery,
} from '@/src/api/wb';

import CurrentRates from '@/src/modules/CurrentRates';
import PriorityCategories from '@/src/modules/PriorityCategories';
import Regions from '@/src/modules/Regions';
import Flex from '@/src/ui-kit/Flex';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  const { data: advertData } = useGetAdvertsQuery();
  const { data: catalogData } = useGetCatalogsQuery();
  const { data: regionsData } = useGetRegionsQuery();

  console.log('catalogData', catalogData, regionsData);
  return (
    <Flex
      flexDirection="column"
      width="100%"
      maxWidth="1300px"
      height="calc(100vh - 100px)"
      justifyContent="flex-start"
      alignItems="flex-start"
      margin="40px 0 0 0"
      gap="28px"
    >
      <CurrentRates />
      <Flex width="100%" gap="20px">
        <Flex
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Regions regions={regionsData || []} />
        </Flex>
        <PriorityCategories />
      </Flex>
    </Flex>
  );
};

export default Home;
