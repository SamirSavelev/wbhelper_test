import styled from 'styled-components';

const Button = styled.button<{ selected: boolean }>`
  display: flex;
  height: 35px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: max-content;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.extraLightGray : theme.lightGray};
  background: ${({ theme, selected }) =>
    selected ? theme.white : 'transparent'};
`;

export const regionStyles = { Button };
