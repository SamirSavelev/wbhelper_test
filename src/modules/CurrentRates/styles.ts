import Flex from '@/src/ui-kit/Flex';
import styled from 'styled-components';

const Container = styled(Flex)`
  border-radius: 20px;
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const currentRatesStyles = { Container };
