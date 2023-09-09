import { Avatar, Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Logo from './Logo';
import BetForm from 'common/Parlay/Form';
import DrawForm from './DrawForm';
import SpreadForm from './Spread.';

const BetBox = ({ away, home, odds, sportId, eventId }) => {
  const { '1_1': odds_1_1, '1_2': odds_1_2, '1_3': odds_1_3 } = odds;
  const eventData = { sportId, eventId };
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)">
        <Logo home={home} away={away} />
        <GridItem>
          <SpreadForm
            odds={odds_1_2}
            eventData={eventData}
            home={home}
            away={away}
          />
        </GridItem>
        <GridItem>
          <BetForm
            odds={odds_1_1}
            eventData={eventData}
            home={home}
            away={away}
          />
        </GridItem>
        <GridItem>
          <DrawForm
            odds={odds_1_3}
            eventData={eventData}
            home={home}
            away={away}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default BetBox;
