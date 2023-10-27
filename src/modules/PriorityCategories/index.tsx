import { NextPage } from 'next';
import { priorityCategoriesStyles } from './styles';
import Text from '@/src/ui-kit/Text';
import Flex from '@/src/ui-kit/Flex';
import { categoriesList } from './config';
import Category from './components';

const { Container } = priorityCategoriesStyles;

const PriorityCategories: NextPage = () => {
  return (
    <Container
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap="20px"
    >
      <Text weight={600}>Приоритет категорий</Text>
      <Flex flexDirection="column" width="100%" justifyContent="flex-start">
        {categoriesList.map((item) => (
          <Category {...item} />
        ))}
      </Flex>
    </Container>
  );
};

export default PriorityCategories;
