import {
  useGetAdvertsQuery,
  useGetCatalogsQuery,
  useGetRegionsQuery,
} from '@/src/api/wb';
import Table from '@/src/components/Table';

import CurrentRates from '@/src/modules/CurrentRates';
import { typeList } from '@/src/modules/CurrentRates/config';
import PriorityCategories from '@/src/modules/PriorityCategories';
import Regions from '@/src/modules/Regions';
import { DropdownItemInterface } from '@/src/ui-kit/Dropdown/types';
import Flex from '@/src/ui-kit/Flex';
import Loader from '@/src/ui-kit/Loader';
import Text from '@/src/ui-kit/Text';
import { NextPage } from 'next';
import React, { ChangeEvent, useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(1);
  const [disabledQuery, setDisabledQuery] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [selectedType, setSelectedType] = useState<DropdownItemInterface>(
    typeList[0]
  );
  const {
    data: advertData,
    isFetching,
    isLoading,
    isError,
    error: advertError,
  } = useGetAdvertsQuery(
    { input: searchValue, type: selectedType.label, region_id: selectedRegion },
    {
      skip: disabledQuery,
    }
  );
  const { data: catalogData } = useGetCatalogsQuery();
  const { data: regionsData } = useGetRegionsQuery();

  const onChangeType = (item: DropdownItemInterface) => {
    setSelectedType(item);
  };
  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const onChangeRegion = (id: number) => setSelectedRegion(id);
  const searchHandler = () => setDisabledQuery(false);

  useEffect(() => {
    if (!isFetching && !isLoading) {
      setDisabledQuery(true);
    }
  }, [isFetching, isLoading]);

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
      <CurrentRates
        selectedType={selectedType}
        onChangeType={onChangeType}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        searchHandler={searchHandler}
      />
      {isFetching ? (
        <Flex
          width="100%"
          margin="64px"
          alignItems="center"
          justifyContent="center"
        >
          <Loader />
        </Flex>
      ) : (
        <Flex width="100%" gap="20px">
          <Flex
            width="100%"
            height=""
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="20px"
          >
            <Regions
              regions={regionsData || []}
              onChangeRegion={onChangeRegion}
              selectedRegion={selectedRegion}
            />
            <Text color="gray">
              Est ipsum gravida sit non. Mi ac habitasse proin sollicitudin
              malesuada blandit. Arcu turpis cursus imperdiet diam tincidunt
              augue ut. Metus proin vel consectetur ipsum quis amet faucibus
              mus. Placerat cras ac amet dictum. Massa sed cursus dapibus morbi
              turpis velit id mauris at.
            </Text>
            {advertData && advertData.bets.length > 0 ? (
              <Table data={advertData.bets} />
            ) : Boolean(searchValue) && !isError ? (
              <Flex width="100%" alignItems="center" justifyContent="center">
                <Text margin="24px" color="gray">
                  По текущему запросу данные не найдены
                </Text>
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
          <PriorityCategories list={advertData?.subject_priorities || []} />
        </Flex>
      )}
    </Flex>
  );
};

export default Home;
