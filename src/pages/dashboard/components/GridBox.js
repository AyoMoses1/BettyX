import { useContext } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { CurrentPageContext } from '../../../App';
import { Link } from 'react-router-dom';

const GridBox = ({ data }) => {
  const { setCurrentPage, handleOpenModal, handleOpenDrawer } =
    useContext(CurrentPageContext);

  const handleClick = () => {
    if (data.route === '/feedback' || data.route === '/add-customer') {
      setCurrentPage(data.route);
      handleOpenModal();
    } else if (data.route === '/scores') {
      setCurrentPage(data.route);
      handleOpenDrawer();
    }
  };

  if (
    data.route === '/feedback' ||
    data.route === '/add-customer' ||
    data.route === '/scores'
  ) {
    return (
      <GridItem
        colSpan={['2', '2', '2', '1']}
        bg="blue"
        py={4}
        borderRadius="md"
        cursor="pointer"
        onClick={handleClick}
      >
        <Flex
          justifyContent="space-between"
          align="center"
          height="100%"
          flexDirection="column"
        >
          <Icon as={data.icon} boxSize={8} color={data.color} />
          <Text variant="cardText" color={data.color}>
            {data.name}
          </Text>
        </Flex>
      </GridItem>
    );
  }
  return (
    <GridItem
      colSpan={['2', '2', '2', '1']}
      bg="blue"
      py={4}
      borderRadius="md"
      cursor="pointer"
    >
      <Link to={data.route}>
        <Flex
          justifyContent="space-between"
          align="center"
          height="100%"
          flexDirection="column"
        >
          <Icon as={data.icon} boxSize={8} color={data.color} />
          <Text variant="cardText" color={data.color}>
            {data.name}
          </Text>
        </Flex>
      </Link>
    </GridItem>
  );
};

export default GridBox;
