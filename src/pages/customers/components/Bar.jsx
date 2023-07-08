import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Bar = () => {
  return (
    <>
      <Box bg="blue" mt={4} px={4} py={2}>
        <Flex align="center" justify="space-between">
          <Box>
            <VStack align="start">
              <Heading variant="h1" color="#fff">
                AMICH123 (ALEX123)
              </Heading>
              <Text variant="tableText" color="white">
                Agent ALEX321
              </Text>
              <Button variant="primary">View Analysis</Button>
            </VStack>
          </Box>
          <Box>
            <Button variant="primary">Save</Button>
          </Box>
        </Flex>
      </Box>
      <Box bg="blue" mt={4} px={4} py={2}>
      <Flex align="center" justify="space-between">
        <Box>
          <HStack>
            <Heading variant="h1" color="#fff"> The Basics </Heading>
          </HStack>
        </Box>
        <Box>
          <Button variant="primary">Save</Button>
        </Box>
      </Flex>
    </Box>
    </>
  );
};

export default Bar;
