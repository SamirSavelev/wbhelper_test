import { NextPage } from 'next';
import { priorityCategoriesStyles } from './styles';
import Text from '@/src/ui-kit/Text';
import Flex from '@/src/ui-kit/Flex';
import { categoriesList } from './config';
import Category from './components';
import { SubjectPrioritiesInterface } from '@/src/api/wb/types';

const { Container } = priorityCategoriesStyles;

const PriorityCategories: NextPage<{
  list: Array<SubjectPrioritiesInterface>;
}> = ({ list }) => {
  return (
    <Container
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap="20px"
      height="max-content"
    >
      <Text weight={600}>Приоритет категорий</Text>
      <Flex flexDirection="column" width="100%" justifyContent="flex-start">
        {list.map((item) => (
          <Category {...item} />
        ))}
        {list.length === 0 && <Text color="gray">Категории не найдены</Text>}
      </Flex>
    </Container>
  );
};

export default PriorityCategories;
