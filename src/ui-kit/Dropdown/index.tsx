import { useRef, useState } from 'react';
import { NextPage } from 'next';
import { useOnClickOutside } from '@/src/hooks/useOnClickOutside';
import { dropdownStyles } from './styles';
import {
  DropdownItemInterface,
  DropdownPropsInterface as Props,
} from './types';
import Text from '../Text';
import Flex from '../Flex';

const { Wrapper, Button, Arrow, Menu, MenuItem } = dropdownStyles;

const Dropdown: NextPage<Props> = ({ menu, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const hideDropdown = () => setIsOpen(false);
  const toggleHandler = () => setIsOpen((prev) => !prev);
  const selectItem = (item: DropdownItemInterface) => {
    onChange(item);
    hideDropdown();
  };

  useOnClickOutside(ref, hideDropdown);

  return (
    <Wrapper ref={ref}>
      <Button onClick={toggleHandler}>
        <Flex
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Text pattern="body3" color="gray">
            Тип
          </Text>
          <Text pattern="body2" color="black" cursor="pointer">
            {selected.title}
          </Text>
        </Flex>
        <Arrow isOpen={isOpen} />
      </Button>
      <Menu isOpen={isOpen}>
        {menu.map((item) => (
          <MenuItem key={item.id} onClick={() => selectItem(item)}>
            <Text
              pattern="body2"
              color={selected.id === item.id ? 'black' : 'gray'}
              weight={selected.id === item.id ? 500 : 400}
              cursor="pointer"
            >
              {item.title}
            </Text>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default Dropdown;
