import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  VStack,
  Text,
  Icon,
  HStack,
  useMediaQuery,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaAddressCard, FaChevronDown, FaTh, FaTv } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { menuItems } from './utils/helpers';
import { BiBasketball, BiPowerOff } from 'react-icons/bi';
import { useQueryClient } from '@tanstack/react-query';
import paths from './utils/paths';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MobileNav from './MobileNav';

const Navbar = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const user_details = JSON.parse(localStorage.getItem('user'));
  console.log({ user_details });
  const [isMobile] = useMediaQuery('(max-width: 1020px)');

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('bet_token');
    localStorage.removeItem('accountId');
    queryClient.cancelQueries();
    queryClient.clear();
    navigate(paths.login);
  };
  return (
    <StyledBox
      bg="playerBlue"
      color="white"
      py={['2']}
      height="100%"
      zIndex="800"
    >
      <Flex maxW="98%" mx="auto" align="center">
        <Box display={{ base: 'block', lg: 'none' }}>
          <MobileNav />
        </Box>
        <Box display={{ base: 'none', lg: 'block' }}>
          <Flex>
            <VStack mr={12}>
              <Text variant="nav">SPORTS</Text>
              <BiBasketball size={isMobile ? 24 : 32} />
            </VStack>
            <VStack mr={12}>
              <Text variant="nav">LIVE</Text>
              <FaTv size={isMobile ? 24 : 32} />
            </VStack>
            <VStack mr={12}>
              <Text variant="nav">CASINO</Text>
              <FaAddressCard size={isMobile ? 24 : 32} />
            </VStack>
            <VStack mr={12}>
              <Text variant="nav">MORE</Text>
              <FaTh size={isMobile ? 24 : 32} />
            </VStack>
            <Box p="4" mr={12} bg="blue" display={['block', 'none']}>
              <FiSearch size={isMobile ? 24 : 32} />
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', lg: 'block' }}>
          <Flex>
            <VStack mr={12} alignItems="end">
              <Text variant="navBold">Balance</Text>
              <Text>${user_details.balance}</Text>
            </VStack>
            <VStack mr={12} alignItems="end">
              <Text variant="navBold">Pending</Text>
              <Text>${user_details.pending}</Text>
            </VStack>
            <VStack mr={12} alignItems="end">
              <Text variant="navBold">Available</Text>
              <Text>${user_details.available}</Text>
            </VStack>
            <Box p="4" mr={12} bg="blue" display={['block', 'none']}>
              <FiSearch size={24} />
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Menu>
          <MenuButton as={Button}>
            <Flex justifyContent="space-between" width="20vw">
              <CgProfile size={24} />
              <Spacer />
              <HStack>
                <span>{localStorage.accountId}</span>
                <FaChevronDown />
              </HStack>
            </Flex>
          </MenuButton>
          <MenuList width="20vw" bgColor="black" border="none">
            {menuItems.map((item) => (
              <MenuItem
                minH="48px"
                bgColor="black"
                _hover={{ bgColor: 'blue' }}
              >
                <Icon
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                  as={item.icon}
                />
                <span>{item?.name}</span>
              </MenuItem>
            ))}
            <MenuItem
              minH="48px"
              bgColor="black"
              _hover={{ bgColor: 'blue' }}
              onClick={handleLogout}
            >
              <Icon boxSize="2rem" mr="12px" as={BiPowerOff} />
              <span>Sign Out</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </StyledBox>
  );
};

export default Navbar;

const StyledBox = styled(Box)`
  // position: fixed;
  // top: 0;
  // right: 0;
  // left: 0;
  // height: 12vh !important;
`;
