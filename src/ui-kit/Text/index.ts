import styled from 'styled-components';
import { TextPropsInterface } from './types';
import { TextLineHeight, TextSize, TextWeight } from './constants';

const Text = styled.div<TextPropsInterface>`
  font-style: normal;
  cursor: ${({ cursor = 'default' }) => cursor};
  font-size: ${({ pattern = 'body1' }) => TextSize[pattern]}px;
  font-weight: ${({ pattern = 'body1', weight }) =>
    weight || TextWeight[pattern]};
  line-height: ${({ pattern = 'body1' }) => TextLineHeight[pattern]}px;
  color: ${({ theme, color = 'black' }) => theme.text[color]};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  margin: ${({ margin = 0 }) => margin};
  padding: ${({ padding = 0 }) => padding};
  white-space: pre-wrap;
  white-space: unset;
  overflow: unset;
  text-overflow: unset;
`;

export default Text;
