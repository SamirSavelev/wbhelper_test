import styled from 'styled-components';

const Container = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  height: 55px;
  width: 55px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  transition: all 0.2s ease-out;
  background-color: ${({ theme, selected }) =>
    selected ? theme.white : 'transparent'};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.extraLightGray : theme.lightGray};
  color: ${({ theme, selected }) =>
    selected ? theme.text.black : theme.lightGray};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const paginationButtonStyles = { Container };
