import { NextPage } from 'next';
import { paginationButtonStyles } from './styles';

const { Container } = paginationButtonStyles;
interface Props {
  selected: boolean;
  title: string;
  onClick(): void;
}
const PaginationButton: NextPage<Props> = ({
  selected = false,
  title,
  onClick,
}) => (
  <Container selected={selected} onClick={onClick}>
    {title}
  </Container>
);

export default PaginationButton;
