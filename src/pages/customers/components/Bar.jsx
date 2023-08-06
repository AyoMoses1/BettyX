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

const Bar = ({ data }) => {
  return (
    <>
      <Box bg="white" mt={4} p={4}>
        <Flex align="center" justify="space-between">
          <Box>
            <VStack align="start">
              <Heading variant="h1">
                {data?.accountId} ({data?.password})
              </Heading>
              <Text variant="tableText">Agent {data?.agentId}</Text>
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
            <VStack align="start">
              <Box>
                <span>Balance: {data?.fpBalance}</span>
              </Box>
              <Box>
                <span>Pending: {data?.pending}</span>
              </Box>
              <Box>
                <span>Available: {data?.available}</span>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Bar;
