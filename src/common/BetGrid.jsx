import { Grid, GridItem, HStack, Avatar, Text, Box } from '@chakra-ui/react';
import BetForm from './BetForm';
const BetGrid = ({ data, odd_1, odd_2, odd_3 }) => {
  const odds = {odd_1, odd_2, odd_3}
  return (
    <Box mt={4} bg="grey" p={2}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <HStack>
            <Avatar
              src={`https://assets.b365api.com/images/team/m/${data.image_id}.png`}
              size="sm"
            />
            <Text>{data?.name}</Text>
          </HStack>
        </GridItem>
        <BetForm odds={odds}/>
      </Grid>
    </Box>
  );
};

export default BetGrid;
