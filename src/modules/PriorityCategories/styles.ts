import Flex from '@/src/ui-kit/Flex';
import styled from 'styled-components';

const Container = styled(Flex)`
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 508px;
  border-radius: 10px;
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const priorityCategoriesStyles = { Container };
