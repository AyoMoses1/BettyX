import { Box, Flex, Text } from '@chakra-ui/react';

const wagerHeader = ({ items }) => {
  return (
    <Box bg="black" color="white" p={2}>
      <Flex justifyContent="space-between">
        <Text variant="nav">Review and Confirm</Text>
        <Text variant="nav">{items ?? items} Wager(s)</Text>
      </Flex>
    </Box>
  );
};

export default wagerHeader;
