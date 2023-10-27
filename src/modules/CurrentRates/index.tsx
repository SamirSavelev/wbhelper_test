import React, { ChangeEvent, useState } from 'react';
import { NextPage } from 'next';
import Text from '@/src/ui-kit/Text';
import Flex from '@/src/ui-kit/Flex';
import Dropdown from '@/src/ui-kit/Dropdown';
import Input from '@/src/ui-kit/Input';
import SearchIcon from '@/src/assets/search.svg';
import { typeList } from './config';
import { currentRatesStyles } from './styles';
import { DropdownItemInterface } from '@/src/ui-kit/Dropdown/types';
import Button from '@/src/ui-kit/Button';

const { Container } = currentRatesStyles;

interface Props {
  searchValue: string;
  selectedType: DropdownItemInterface;
  onChangeType(item: DropdownItemInterface): void;
  onChangeSearchValue(event: ChangeEvent<HTMLInputElement>): void;
  searchHandler(): void;
}
const CurrentRates: NextPage<Props> = ({
  searchValue,
  selectedType,
  onChangeType,
  onChangeSearchValue,
  searchHandler,
}) => {
  return (
    <Container
      flexDirection="column"
      width="100%"
      height="max-content"
      padding="20px"
      gap="10px"
    >
      <Text pattern="headline1">Актуальные ставки</Text>
      <Flex
        flexDirection="row"
        gap="20px"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Dropdown
          menu={typeList}
          selected={selectedType}
          onChange={onChangeType}
        />
        <Input
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Поиск по названию или артикулу"
          postfix={<SearchIcon />}
        />
        <Flex width="max-content">
          <Button
            pattern="primary"
            size="large"
            onClick={searchHandler}
            width="224px"
          >
            Найти
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CurrentRates;
