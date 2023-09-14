import { Grid, GridItem, HStack, Avatar, Text, Box } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import DrawForm from './TotalForm';
const DrawGrid = ({ odd, eventData, prediction, home, away }) => {
  return (
    <Box mt={4} bg="grey" p={2}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <HStack>
            <FaTimes />
            <Text>Draw</Text>
          </HStack>
        </GridItem>
        <DrawForm
          odd={odd}
          eventData={eventData}
          prediction={prediction}
          home={home}
          away={away}
        />
      </Grid>
    </Box>
  );
};

export default DrawGrid;
