import styled from 'styled-components';
import { ButtonPropsInterface } from './types';
import { ButtonPadding } from './constants';

const Button = styled.button<ButtonPropsInterface>`
  transition: all 0.2s ease-out;
  cursor: pointer;
  border-radius: 4px;
  padding: ${({ size = 'small' }) => ButtonPadding[size]};
  background: ${({ theme, pattern = 'primary' }) =>
    theme.button[pattern].default.background};
  color: ${({ theme, pattern = 'primary' }) =>
    theme.button[pattern].default.text};
  box-shadow: ${({ theme, pattern = 'primary' }) =>
    theme.button[pattern].default.shadow};
  border: ${({ theme, pattern = 'primary' }) =>
    `1px solid ${theme.button[pattern].default.border}`};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  width: ${({ width = 'max-content' }) => width};
  &:hover {
    background: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].hover.background};
    color: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].hover.text};
    box-shadow: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].hover.shadow};
    border: ${({ theme, pattern = 'primary' }) =>
      `1px solid ${theme.button[pattern].hover.border}`};
  }
  &:active {
    background: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].pressed.background};
    color: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].pressed.text};
    box-shadow: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].pressed.shadow};
    border: ${({ theme, pattern = 'primary' }) =>
      `1px solid ${theme.button[pattern].pressed.border}`};
  }
  &:disabled {
    background: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].disabled.background};
    color: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].disabled.text};
    box-shadow: ${({ theme, pattern = 'primary' }) =>
      theme.button[pattern].disabled.shadow};
    border: ${({ theme, pattern = 'primary' }) =>
      `1px solid ${theme.button[pattern].disabled.border}`};
  }
`;

export default Button;
