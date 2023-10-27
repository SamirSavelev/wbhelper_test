import { NextPage } from 'next';
import { inputStyles } from './styles';
import { InputPropsInterface as Props } from './types';

const { Container, StyledInput, Wrapper } = inputStyles;

const Input: NextPage<Props> = ({ postfix, type = 'text', ...props }) => (
  <Wrapper>
    <Container>
      <StyledInput type={type} {...props} />
      {postfix}
    </Container>
  </Wrapper>
);

export default Input;
