import styled from 'styled-components';
import ChevronIcon from '@/src/assets/chevron.svg';

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 11px 10px;
  width: 224px;
  height: 55px;
  border-radius: 4px;
  background: ${({ theme }) => theme.lightBlue};
`;

const Arrow = styled(ChevronIcon)<{ isOpen: boolean }>`
  transition: all 0.2s ease-out;
  transform: ${({ isOpen }) => `rotate(${!isOpen ? '0' : '180deg'})`};
`;

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 60px;
  left: 0;
  padding: 4px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visidible' : 'hidden')};
  translate: ${({ isOpen }) => (isOpen ? '0' : '0 -20px')};
  transition: 0.4s;
  border-radius: 4px;
  width: 100%;
  min-width: 140px;
  max-width: 224px;
  background: ${({ theme }) => theme.white};
`;

const MenuItem = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px;
`;

export const dropdownStyles = { Wrapper, Button, Arrow, Menu, MenuItem };
