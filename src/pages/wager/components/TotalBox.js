import { Box, Flex, Text } from '@chakra-ui/react';

const TotalBox = ({ totalWager, totalWin, toWin }) => {
  return (
    <Box border="1px solid grey" p={4} mt={24}>
      <Flex justifyContent="space-between">
        <Text>Total Wagered:</Text>
        <Text>${totalWager}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Total Possible Win:</Text>
        <Text>${totalWin}</Text>
      </Flex>
    </Box>
  );
};

export default TotalBox;
