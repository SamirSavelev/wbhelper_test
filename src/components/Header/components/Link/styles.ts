import LinkBase from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(LinkBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  justify-content: flex-start;
  width: max-content;
  white-space: nowrap;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: color 0.2s ease-out;
  path {
    transition: stroke 0.2s ease-out;
    stroke: ${({ theme }) => theme.text.gray};
  }
  color: ${({ theme }) => theme.text.gray};
  &:hover {
    path {
      transition: stroke 0.2s ease-out;
      stroke: ${({ theme }) => theme.text.black};
    }
    color: ${({ theme }) => theme.text.black};
  }
`;

const Underline = styled.div<{ opacity: number }>`
  display: flex;
  width: 100%;
  height: 1px;
  opacity: ${({ opacity }) => opacity};
  background: ${({ theme }) => theme.mainYellow};
  transition: opacity 0.2s ease-out;
`;
export const linkStyles = {
  StyledLink,
  Underline,
};
