import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PageHeader = (props) => {
  return (
    <Box>
      <Flex
        mb={3}
        alignItems="center"
        justifyContent="space-between"
        bgColor="black"
        pl={2}
      >
        <Text variant="whiteBoldNormal">{props.title}</Text>
        <Box bg="white" px={12} py={4}>{props.icon}</Box>
      </Flex>
    </Box>
  );
};

export default PageHeader;
