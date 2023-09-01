import { Box, Flex, Text } from '@chakra-ui/react';

const TotalBox = () => {
  return (
    <Box border="1px solid grey" p={4}>
      <Flex justifyContent="space-between">
        <Text>Total Wagered:</Text>
        <Text>$2.10</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Total Possible Win:</Text>
        <Text>$2.10</Text>
      </Flex>
    </Box>
  );
};

export default TotalBox;
