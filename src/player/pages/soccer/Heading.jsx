import { Box, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import styled from 'styled-components'

const Heading = () => {
  return (
    <Box>
      <Box bgColor="black" px={4}>
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem></GridItem>
          <GridItem>
            <Flex justifyContent="space-between" ml={8}>
              <StyledText>Spread</StyledText>
              <StyledText>Moneyline</StyledText>
              <StyledText>Total</StyledText>
            </Flex>
          </GridItem>
          <GridItem textAlign="center">
            <StyledText>Team Total</StyledText>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};


const StyledText = styled(Text)`
  font-size: 18px !important;
  text-transform: uppercase;
  color: white;
`;


export default Heading;
