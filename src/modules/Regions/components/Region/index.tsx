import { ArrayItem } from '@/src/features/types';
import { NextPage } from 'next';
import React from 'react';
import { regionStyles } from './styles';

const { Button } = regionStyles;
interface Props extends ArrayItem {
  selected: boolean;
  onClick(): void;
}
const Region: NextPage<Props> = ({ selected, id, name, onClick }) => {
  return (
    <Button selected={selected} onClick={onClick}>
      {name}
    </Button>
  );
};

export default Region;
