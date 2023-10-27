import { MouseEvent } from 'react';

export type ButtonSize = 'small' | 'large';
export type ButtonPattern = 'outline' | 'primary';

export interface ButtonPropsInterface {
  pattern?: ButtonPattern;
  size?: ButtonSize;
  onClick(event: MouseEvent<HTMLButtonElement>): void;
  width?: string;
}
