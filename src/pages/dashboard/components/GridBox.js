import React from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

const GridBox = ({ data }) => {
  return (
    <GridItem colSpan={1} bg={data.color} py={4} borderRadius="md">
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
