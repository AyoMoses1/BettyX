import React from 'react';
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import Wager from 'pages/wager';

import styled from 'styled-components';
import { useContext } from 'react';
import { CurrentPageContext } from 'App';
import { useSelector } from 'react-redux';
import ParlayWager from 'pages/wager/ParlayWager';

const navLinks = (placeWager, currentTab, parlay) => {
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
    // {
    //   name: 'continue',
    //   symbol: currentTab === 'parlay' ? `c[${parlay.length}]` : 'c',
    //   onClick: placeWager,
    // },
  ];
};
const NavBarMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: parlayOpen,
    onOpen: parlayOnOpen,
    onClose: parlayOnClose,
  } = useDisclosure();
  const { setCurrentTab, currentTab } = useContext(CurrentPageContext);
  const parlay = useSelector((state) => state.wagersReducer.parlay);
  const handleTabClick = (name, fn) => {
    setCurrentTab(name);
    fn && fn();
  };
  const handleWager = () => {
    onOpen();
  };
  const handleParlayWager = () => {
    parlayOnOpen();
  };

  return (
    <StyledBox color="white" px={0} py={0} pb={2} bgColor="playerBlue">
      <Tabs variant="unstyled">
        <TabList>
          {navLinks(handleWager, currentTab, parlay).map((item) => (
            <Tab
              _selected={{ color: 'black', bg: 'grey' }}
              width="100%"
              border="1px solid"
              borderColor="grey"
              bg={
                item.name === 'continue'
                  ? 'green'
                  : item.name === 'refresh'
                  ? 'blue'
                  : ''
              }
              mx={2}
            >
              <Box
                ml={2}
                cursor="pointer"
                onClick={() => handleTabClick(item.name, item.onClick)}
              >
                <Text variant="navBold">{item.symbol}</Text>
                <Text variant="nav">{item.name}</Text>
              </Box>
            </Tab>
          ))}
          <Tab
            _selected={{ color: 'black', bg: 'green' }}
            width="100%"
            border="1px solid"
            borderColor="grey"
            bg="green"
            mx={2}
          >
            <Box
              ml={2}
              cursor="pointer"
              color="white"
              onClick={
                currentTab === 'straight' ? handleWager : handleParlayWager
              }
            >
              <Text
                variant="navBold"
                bg="orange"
                width="35px"
                mx="auto"
                borderRadius="50%"
                textAlign="center"
              >
                {currentTab === 'parlay' ? `${parlay.length}` : 'c'}
              </Text>
              <Text variant="nav">Continue</Text>
            </Box>
          </Tab>
        </TabList>
      </Tabs>
      <Wager isOpen={isOpen} handleClose={onClose} />
      <ParlayWager isOpen={parlayOpen} handleClose={parlayOnClose} />
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
