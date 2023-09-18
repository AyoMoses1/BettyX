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
import { useContext, useState } from 'react';
import { CurrentPageContext } from 'App';
import { useDispatch, useSelector } from 'react-redux';
import ParlayWager from 'pages/wager/ParlayWager';
import Alert from './Alert';
import { resetWagerState } from 'store/wagers/wagerSlice';
import { FaSync } from 'react-icons/fa';

const navLinks = (placeWager, currentTab, parlay, onRefresh) => {
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
      symbol: (
        <Box mb={2}>
          <FaSync />
        </Box>
      ),
      onClick: onRefresh,
    },
  ];
};
const NavBarMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
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

  const onRefresh = () => {
    dispatch(resetWagerState());
    window.location.reload();
  };

  const handleParlayWager = () => {
    if (parlay.length <= 1) {
      setAlert(true);
    } else {
      setAlert(false);
      parlayOnOpen();
    }
  };

  return (
    <StyledBox color="white" px={0} py={0} pb={2} bgColor="playerBlue">
      <Tabs variant="unstyled">
        <TabList>
          {navLinks(handleWager, currentTab, parlay, onRefresh).map((item) => (
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
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Text variant="navBold">{item.symbol}</Text>
                <Text variant="nav" textTransform="uppercase">
                  {item.name}
                </Text>
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
              <Text variant="nav" textTransform="uppercase">
                Continue
              </Text>
            </Box>
          </Tab>
        </TabList>
      </Tabs>
      <Wager isOpen={isOpen} handleClose={onClose} />
      <ParlayWager isOpen={parlayOpen} handleClose={parlayOnClose} />
      {alert && (
        <Alert
          title="Warning"
          description="At least 2 picks are required for a parlay"
          status="error"
        />
      )}
    </StyledBox>
  );
};

export default NavBarMain;

const StyledBox = styled(Box)`
  padding: 5px 30px;
  text-align: center;
`;
