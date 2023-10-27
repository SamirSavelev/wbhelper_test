import styled from 'styled-components';
import ArrowIcon from '@/src/assets/chevron.svg';
import { Endpoints } from './types';
import Image from 'next/image';
import Link from 'next/link';
import Flex from '@/src/ui-kit/Flex';

const StyledCpm = styled(Flex)`
  border-radius: 10px;
  background: rgba(255, 222, 49, 0.2);
  color: #121212;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
`;
const StyledLink = styled(Link)`
  color: #2c80ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;
const StyledImage = styled(Image)`
  border-radius: 2px;
  width: 50px;
  height: 65px;
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  border: 0.5px solid #ecdadb;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const DefaultLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  border: 0.5px solid #ecdadb;
  background-color: #ecdadb;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;

const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;

const Thead = styled.thead`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.white};
`;

const Th = styled.th<{
  endpoins: Endpoints;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 320px) {
    width: ${({ endpoins }) => endpoins['320']};
  }
  @media (min-width: 375px) {
    width: ${({ endpoins }) => endpoins['375']};
  }
  @media (min-width: 425px) {
    width: ${({ endpoins }) => endpoins['425']};
  }
  @media (min-width: 768px) {
    width: ${({ endpoins }) => endpoins['768']};
  }
  @media (min-width: 1024px) {
    width: ${({ endpoins }) => endpoins['1024']};
  }
  @media (min-width: 1440px) {
    width: ${({ endpoins }) => endpoins['1440']};
  }
`;

const HeadTr = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  gap: 20px;
`;

const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;

const BodyTr = styled.tr<{ bg: 'transparent' | 'white' }>`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
  border-radius: 10px;
  background: ${({ bg = 'transparent' }) => bg};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
  padding: 10px;
  gap: 20px;
  height: 80px;
`;

const LogoWrapper = styled.div`
  width: 64px;
  height: 64px;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Td = styled.td<{
  endpoins: Endpoints;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (min-width: 320px) {
    width: ${({ endpoins }) => endpoins['320']};
  }
  @media (min-width: 375px) {
    width: ${({ endpoins }) => endpoins['375']};
  }
  @media (min-width: 425px) {
    width: ${({ endpoins }) => endpoins['425']};
  }
  @media (min-width: 768px) {
    width: ${({ endpoins }) => endpoins['768']};
  }
  @media (min-width: 1024px) {
    width: ${({ endpoins }) => endpoins['1024']};
  }
  @media (min-width: 1440px) {
    width: ${({ endpoins }) => endpoins['1440']};
  }
`;

const PaginationArrow = styled(ArrowIcon)<{ type?: 'left' | 'right' }>`
  cursor: pointer;
  transform: ${({ type }) => `rotate(${type === 'left' ? -90 : 90}deg)`};
`;

export const tableStyles = {
  Logo,
  DefaultLogo,
  Wrapper,
  StyledTable,
  HeadTr,
  BodyTr,
  Thead,
  Tbody,
  Th,
  Td,
  LogoWrapper,
  PaginationArrow,
  StyledImage,
  StyledLink,
  StyledCpm,
};
