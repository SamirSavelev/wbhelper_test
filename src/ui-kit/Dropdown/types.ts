export interface DropdownItemInterface {
  id: number;
  title: string;
}

export interface DropdownPropsInterface {
  menu: Array<DropdownItemInterface>;
  selected: DropdownItemInterface;
  onChange(item: DropdownItemInterface): void;
}
