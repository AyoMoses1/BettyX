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
  const { setCurrentTab } = useContext(CurrentPageContext);
  const handleTabClick = (name, fn) => {
    setCurrentTab(name);
    fn && fn();
  };
  const handleWager = () => {
    onOpen();
  };

  return (
    <StyledBox color="white" px={0} py={0} pb={2} bgColor="playerBlue">
      <Tabs variant="unstyled">
        <TabList>
          {navLinks(handleWager).map((item) => (
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
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
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
