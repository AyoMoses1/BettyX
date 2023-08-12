import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Text,
  Flex,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { BiBasketball } from 'react-icons/bi';
import { FaAddressCard, FaTh, FaTv } from 'react-icons/fa';
const MobileNav = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMenu />}
        border="1px solid"
        borderColor="white"
        borderRadius="50%"
        color="white"
      />
      <MenuList border="none" bgColor="black">
        <Box width="50vw" height="40vh" display="flex" flexDirection="column" justifyContent="space-around">
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem mb={8}>
              <VStack>
                <Text variant="nav">SPORTS</Text>
                <BiBasketball size={42} />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Text variant="nav">LIVE</Text>
                <FaTv size={42} />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Text variant="nav">CASINO</Text>
                <FaAddressCard size={42} />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Text variant="nav">SPORTS</Text>
                <BiBasketball size={42} />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Text variant="nav">LIVE</Text>
                <FaTv size={42} />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Text variant="nav">CASINO</Text>
                <FaAddressCard size={42} />
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default MobileNav;
