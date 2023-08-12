import { HStack, Text, Icon } from "@chakra-ui/react";

const NavMole = ({ name, icon, isLogout }) => {
  return (
    <HStack py={3} borderBottom="1px solid" borderColor="#393838" pl="4">
      <Icon as={icon} color="white"/>
      <Text fontSize="sm" variant="nav">
        {name}
      </Text>
    </HStack>
  );
};

export default NavMole;
