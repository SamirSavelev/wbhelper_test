import { ChangeEventHandler, ReactNode } from 'react';

export interface InputPropsInterface {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  postfix?: ReactNode;
  type?: 'text' | 'password';
}
