export interface DropdownItemInterface {
  id: number;
  title: string;
  label: string;
}

export interface DropdownPropsInterface {
  menu: Array<DropdownItemInterface>;
  selected: DropdownItemInterface;
  onChange(item: DropdownItemInterface): void;
}
