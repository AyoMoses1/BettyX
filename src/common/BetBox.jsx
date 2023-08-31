import { Box } from '@chakra-ui/react';
import BetGrid from './BetGrid';
import DrawGrid from './DrawGrid';

const BetBox = ({ away, home, odds }) => {
  const { '1_1': odds_1_1, '1_2': odds_1_2, '1_3': odds_1_3 } = odds;
  return (
    <Box>
      <BetGrid
        data={home}
        odd_1={odds_1_1 && odds_1_1[0]?.home_od}
        odd_2={odds_1_2 && odds_1_2[0]?.home_od}
        odd_3={odds_1_3 && odds_1_3[0]?.over_od}
      />
      <BetGrid
        data={away}
        odd_1={odds_1_1 && odds_1_1[0]?.away_od}
        odd_2={odds_1_2 && odds_1_2[0]?.away_od}
        odd_3={odds_1_3 && odds_1_3[0]?.under_od}
      />
      <DrawGrid odd={odds_1_1 && odds_1_1[0]?.draw_od}/>
    </Box>
  );
};

export default BetBox;
