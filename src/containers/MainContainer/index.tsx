import { NextPage } from 'next';
import { mainContainerStyles } from './styles';
import { PropsWithChildren as Props } from '@/src/types/global';

const { Wrapper } = mainContainerStyles;

const MainContainer: NextPage<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default MainContainer;
