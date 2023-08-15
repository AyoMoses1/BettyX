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
import { BiAlarmExclamation, BiBasketball } from 'react-icons/bi';
import {
  FaAddressCard,
  FaBlogger,
  FaHorse,
  FaHorseHead,
  FaTh,
  FaTv,
} from 'react-icons/fa';
import { MdFormatListNumbered, MdOutlineSportsBar, MdSports } from 'react-icons/md';
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
        <Box
          width="100vw"
          height="40vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem mb={8}>
              <VStack>
                <MdOutlineSportsBar size={42} />
                <Text variant="navBold">SPORTS</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <FaTv size={42} />
                <Text variant="navBold">LIVE</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <FaAddressCard size={42} />
                <Text variant="navBold">CASINO</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <MdFormatListNumbered size={42} />
                <Text variant="navBold">Prop Builder</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <FaHorseHead size={42} />
                <Text variant="navBold">Horses</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <MdSports size={42} />
                <Text variant="navBold">Rules</Text>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default MobileNav;
