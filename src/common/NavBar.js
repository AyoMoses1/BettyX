import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { FiSearch, FiLogOut } from 'react-icons/fi';
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineLineChart,
  AiOutlineCalendar,
  AiOutlineSetting,
} from 'react-icons/ai';
import { CurrentPageContext } from '../App';

const Navbar = () => {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const { setCurrentPage } = useContext(CurrentPageContext);

  return (
    <Box bg="gray.800" color="white" py={4} h="12vh">
      <Flex maxW="98%" mx="auto" align="center">
        <Box>
          <Flex spacing="10px">
            <Box p={4} mr={2} bg="green" onClick={() => setCurrentPage('home')}>
              <AiOutlineHome size={24} />
            </Box>
            <Box p="4" mr={2} bg="blue" onClick={() => setCurrentPage('games')}>
              <AiOutlineMessage size={24} />
            </Box>
            <Box p="4" mr={2} bg="blue">
              <AiOutlineLineChart size={24} />
            </Box>
            <Box p="4" mr={2} bg="blue">
              <AiOutlineCalendar size={24} />
            </Box>
            <Box p="4" mr={2} bg="blue">
              <AiOutlineSetting size={24} />
            </Box>
          </Flex>
        </Box>
        <InputGroup w="300px">
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray" />}
            bg="gray1"
          />
          <Input
            type="text"
            placeholder="Search Accounts..."
            sx={{ borderRadius: '0px', paddingLeft: '16' }}
          />
        </InputGroup>
        <Spacer />
        <Button
          colorScheme="blue"
          variant="ghost"
          leftIcon={<FiLogOut />}
          onClick={handleLogout}
          alignSelf="flex-end"
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
