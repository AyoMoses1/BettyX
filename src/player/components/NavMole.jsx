import { HStack, Text, Icon, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const NavMole = ({ name, icon, isLogout, isSub, path, id, sportId }) => {
  if (isSub) {
    return (
      <HStack py={3} borderBottom="1px solid" borderColor="#393838" pl="4">
        <Icon as={icon} color="white" />
        <Text fontSize="sm" variant="nav">
          {name}
        </Text>
      </HStack>
    );
  }

  return (
    <HStack py={3} borderBottom="1px solid" borderColor="#393838">
      <Link
        as={ReactRouterLink}
        to={{
          pathname: path,
        }}
        state={{
          sportId,
          id,
        }}
      >
        <Text>{name}</Text>
      </Link>
    </HStack>
  );
};

export default NavMole;
