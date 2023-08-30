import React from 'react';
import { Box, Flex, VStack, Text, useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import Wager from 'pages/wager';

import styled from 'styled-components';
import { placeWager } from 'store/wagers/wagerSlice';

const navLinks = (placeWager) => {
  return [
    {
      name: 'straight',
      symbol: 's',
    },
    {
      name: 'parlay',
      symbol: 'p',
    },
    {
      name: 'teaser',
      symbol: 'T',
    },
    {
      name: 'If Bet',
      symbol: 'I',
    },
    {
      name: 'reverse',
      symbol: 'R',
    },
    {
      name: 'refresh',
      symbol: 'r',
    },
    {
      name: 'continue',
      symbol: 'c',
      onClick: placeWager,
    },
  ];
};
const NavBarMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleWager = () => {
    onOpen();
  };

  return (
    <StyledBox color="white" px={0} py={0} pb={2} bgColor="playerBlue">
      <Flex align="center">
        {navLinks(handleWager).map((item) => (
          <StyledInnerBox
            ml={2}
            width="14%"
            cursor="pointer"
            onClick={item?.onClick}
          >
            <Text variant="navBold" color="white">
              {item.symbol}
            </Text>
            <Text variant="nav" color="white">
              {item.name}
            </Text>
          </StyledInnerBox>
        ))}
      </Flex>
      <Wager isOpen={isOpen} handleClose={onClose} />
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
