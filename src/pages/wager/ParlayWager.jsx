import { Button, Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Drawer from 'common/Drawer';
import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { usePlaceBet } from './queryHooks';
import WagerHeader from './components/WagerHeader';
import ParlayGrid from './components/ParlayGrid';

const ParlayWager = ({ isOpen, handleClose }) => {
  const wager = useSelector((state) => state.wagersReducer);
  const [win, setWin] = useState();

  const { mutate, isLoading } = usePlaceBet();

  const handlePlaceBet = () => {
    const toWin = wager.games[0].odd * wager.stake - wager.stake;
    const { predictedLogo, ...gameData } = wager.games[0];
    const newPayload = { ...wager, games: [gameData] };
    const data = { ...newPayload, toWin, accumulatedOdds: wager.games[0].odd };
    mutate({ data });
  };

  const handleGetWinAmount = (e) => {
    const value = e.target.value;
    setWin(value * 200);
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={handleClose}
      title="Scoreboard"
      size="md"
      button={
        <>
          <Button variant="primary" onClick={handleClose}>
            Clear All
          </Button>
          <Button
            variant="success"
            onClick={handlePlaceBet}
            isLoading={isLoading}
          >
            Place Wagers
          </Button>
        </>
      }
    >
      <WagerHeader items={wager?.parlay?.length} />
      {wager?.parlay?.map((item) => (
        <ParlayGrid data={item} stake={wager?.stake} />
      ))}
      <Box display="flex" justifyContent="space-between" mt={24}>
        <FormControl width="200px">
          <FormLabel htmlFor="field1" display="block">
            Risking
          </FormLabel>
          <Input type="number" id="field1" onChange={handleGetWinAmount} />
        </FormControl>

        <FormControl width="200px">
          <FormLabel htmlFor="field2" display="block">
            To Win
          </FormLabel>
          <Input type="number" id="field2" value={win} />
        </FormControl>
      </Box>
    </Drawer>
  );
};

export default ParlayWager;
