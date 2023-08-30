import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Flex,
  GridItem,
} from '@chakra-ui/react';

const FormElements = ({ item }) => {
  return (
    <Box>
      <FormControl>
        <Flex alignItems="center">
          <FormLabel htmlFor="input1">{item?.label}</FormLabel>
          <Input
            type={item.type}
            sx={{ borderRadius: '0px', width: '100px' }}
          />
        </Flex>
      </FormControl>
    </Box>
  );
};

const DrawForm = ({ odd }) => {
  const inputElements = [
    {
      name: 'Market 1',
      type: 'number',
      label: odd,
    },
  ];
  return (
    <GridItem colSpan={2}>
      <Box>
        <form>
          <HStack spacing={4} justifyContent="center">
            {inputElements.map((item, idx) => (
              <FormElements item={item} key={idx} />
            ))}
          </HStack>
        </form>
      </Box>
    </GridItem>
  );
};

export default DrawForm;
