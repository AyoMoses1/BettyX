import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Table = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Flex>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Column 1</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Column 2</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Column 3</Text>
        </Box>
      </Flex>
      <Flex>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 1, Cell 1</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 1, Cell 2</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 1, Cell 3</Text>
        </Box>
      </Flex>
      <Flex>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 2, Cell 1</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 2, Cell 2</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 2, Cell 3</Text>
        </Box>
      </Flex>
      <Flex>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 3, Cell 1</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 3, Cell 2</Text>
        </Box>
        <Box p={2} borderWidth={1} textAlign="center" width="100px">
          <Text>Row 3, Cell 3</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Table;
