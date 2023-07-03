import React, { useContext } from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { CurrentPageContext } from '../../../App';

const GridBox = ({ data }) => {
  const { setCurrentPage, handleOpenModal, handleOpenDrawer } =
    useContext(CurrentPageContext);

  const handleClick = () => {
    if (data.route === 'feedback') {
      setCurrentPage(data.route);
      handleOpenModal();
    } else if (data.route === 'scores') {
      console.log("scores")
      setCurrentPage(data.route);
      handleOpenDrawer();
    } else {
      setCurrentPage(data.route);
    }
  };
  return (
    <GridItem
      colSpan={1}
      bg={data.color}
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
        <Icon
          as={data.icon}
          boxSize={8}
          color={data.color === 'white' ? 'black' : 'white'}
        />
        <Text
          variant="cardText"
          color={data.color === 'white' ? 'black' : 'white'}
        >
          {data.name}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default GridBox;
