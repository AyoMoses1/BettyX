import React from 'react';
import { Box, Grid, GridItem, Flex, Text } from '@chakra-ui/react';

const array = ["spread", ]
const Heading = () => {
  return (
    <Box>
      <Box bgColor="black" px={4}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
          <GridItem></GridItem>
          <GridItem>
            <Flex
              justifyContent={{ base: 'center', md: 'space-between' }}
              ml={{ base: 0, md: 8 }}
            >
              <Text
                fontSize={{ base: '16px', md: '18px' }}
                textTransform="uppercase"
                color="white"
              >
                Spread
              </Text>
              <Text
                fontSize={{ base: '16px', md: '18px' }}
                textTransform="uppercase"
                color="white"
              >
                Moneyline
              </Text>
              <Text
                fontSize={{ base: '16px', md: '18px' }}
                textTransform="uppercase"
                color="white"
              >
                Total
              </Text>
            </Flex>
          </GridItem>
          <GridItem textAlign={{ base: 'center', md: 'left' }}>
            <Text
              fontSize={{ base: '16px', md: '18px' }}
              textTransform="uppercase"
              color="white"
            >
              Team Total
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Heading;
