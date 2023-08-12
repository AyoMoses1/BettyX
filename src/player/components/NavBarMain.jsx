import React from "react";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import styled from "styled-components";

const navLinks = [
  {
    name: "straight",
    symbol: "s",
  },
  {
    name: "parlay",
    symbol: "p",
  },
  {
    name: "teaser",
    symbol: "T",
  },
  {
    name: "If Bet",
    symbol: "I",
  },
  {
    name: "reverse",
    symbol: "R",
  },
  {
    name: "refresh",
    symbol: "r",
  },
  {
    name: "continue",
    symbol: "c",
  },
];
const NavBarMain = () => {
  return (
    <StyledBox color="white" px={0} py={0} pb={2} bgColor="playerBlue">
      <Flex align="center">
        {navLinks.map((item) => (
          <StyledInnerBox ml={2} width="14%">
            <Text variant="navBold" color="white">{item.symbol}</Text>
            <Text variant="nav" color="white">{item.name}</Text>
          </StyledInnerBox>
        ))}
      </Flex>
    </StyledBox>
  );
};

export default NavBarMain;

const StyledBox = styled(Box)`
  padding: 5px 30px;
  text-align: center;
`;

const StyledInnerBox = styled(Box)`
  border: 1px solid #393838;
`;
