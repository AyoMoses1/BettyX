import { Box } from '@chakra-ui/react';
import BetGrid from './BetGrid';
import DrawGrid from './DrawGrid';

const BetBox = ({ away, home, odds, sportId, eventId, gameInfo }) => {
  const { '1_1': odds_1_1, '1_2': odds_1_2, '1_3': odds_1_3 } = odds;
  const eventData = { sportId, eventId };
  return (
    <Box>
      <BetGrid
        data={home}
        prediction="home"
        home={home.name}
        away={away.name}
        eventData={eventData}
        odd_1={odds_1_1 && odds_1_1[0]?.home_od}
        odd_2={odds_1_2 && odds_1_2[0]?.home_od}
        odd_3={odds_1_3 && odds_1_3[0]?.over_od}
        odd_2_handicap={odds_1_2 && odds_1_2[0]?.handicap}
        odd_3_handicap={odds_1_3 && odds_1_3[0]?.handicap}
        market_3_prediction="over"
        gameInfo={gameInfo}
      />
      <BetGrid
        data={away}
        prediction="away"
        home={home.name}
        away={away.name}
        eventData={eventData}
        odd_1={odds_1_1 && odds_1_1[0]?.away_od}
        odd_2={odds_1_2 && odds_1_2[0]?.away_od}
        odd_2_handicap={odds_1_2 && odds_1_2[0]?.handicap}
        odd_3_handicap={odds_1_3 && odds_1_3[0]?.handicap}
        odd_3={odds_1_3 && odds_1_3[0]?.under_od}
        market_3_prediction="under"
        gameInfo={gameInfo}
      />
      <DrawGrid
        odd={odds_1_1 && odds_1_1[0]?.draw_od}
        eventData={eventData}
        prediction="draw"
        home={home.name}
        away={away.name}
        gameInfo={gameInfo}
      />
    </Box>
  );
};

export default BetBox;
