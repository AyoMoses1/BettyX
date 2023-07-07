import {
  Box,
  VStack,
  Flex,
  Icon,
  Heading,
  Text,
  ModalCloseButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { IoPersonAddSharp } from 'react-icons/io5';
import { data } from './helpers';

const ModalOptions = ({ onClose }) => {
  return (
    <VStack spacing={4}>
      <ModalCloseButton />
      {data.map((item) => (
        <Box borderWidth="1px" borderRadius="md" p={4} width="100%">
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem alignSelf="center">
              <VStack>
                <Icon as={IoPersonAddSharp} boxSize={6} mr={2} />
                <Text variant="cardText" color="black" fontWeight="bold">
                  {item.caption}
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={4} alignSelf="center">
              <Text variant="cardText" color="black">
                {item.title}
              </Text>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </VStack>
  );
};

export default ModalOptions;
