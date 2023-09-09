import React from 'react';
import { GridItem, HStack, Text, Avatar } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

const Logo = ({home, away}) => {
  return (
    <GridItem>
      <HStack>
        <Avatar
          src={`https://assets.b365api.com/images/team/m/${home.image_id}.png`}
          size="sm"
        />
        <Text>{home?.name}</Text>
      </HStack>
      <HStack>
        <Avatar
          src={`https://assets.b365api.com/images/team/m/${away.image_id}.png`}
          size="sm"
        />
        <Text>{away?.name}</Text>
      </HStack>
      <HStack>
        <FaTimes />
        <Text>Draw</Text>
      </HStack>
    </GridItem>
  );
};

export default Logo;
