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
import { BiArrowBack } from 'react-icons/bi';

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
              <Button
                variant="primary"
                size="xs"
                marginTop={8}
                leftIcon={<BiArrowBack />}
              >
                Customer Admin
              </Button>
            </VStack>
          </Box>
          <Box>
            <VStack align="start" color="#fff">
              <Box>
                <span>Balance: 0.00</span>
              </Box>
              <Box>
                <span>Pending: 0.00</span>
              </Box>
              <Box>
                <span>Available: 0.00</span>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Box bg="blue" mt={4} px={4} py={2}>
        <Flex align="center" justify="space-between">
          <Box>
            <HStack>
              <Heading variant="h1" color="#fff">
                {' '}
                The Basics{' '}
              </Heading>
            </HStack>
          </Box>
          <Box>
            <Button variant="primary" size="xs" px={8}>
              Save
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Bar;
