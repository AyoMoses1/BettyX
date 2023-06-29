import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { FiSearch, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
  };

  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} align="center">
        <InputGroup w="300px">
          <InputLeftElement pointerEvents="none" children={<FiSearch color="gray.400" />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <Spacer />
        <Button
          colorScheme="blue"
          variant="ghost"
          leftIcon={<FiLogOut />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
