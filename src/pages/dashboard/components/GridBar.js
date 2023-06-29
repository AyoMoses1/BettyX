import React from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';

const GridBar = ({ span, data }) => {
  return (
    <GridItem colSpan={span} height="40px" bg="blue" px={4}>
      <Flex justifyContent="space-between" align="center" height="100%">
        <Text>{data.title}</Text>
        <Text>{data.value}</Text>
      </Flex>
    </GridItem>
  );
};

export default GridBar;
