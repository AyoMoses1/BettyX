import { Button, Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Drawer from 'common/Drawer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePlaceBet } from './queryHooks';
import WagerHeader from './components/WagerHeader';
import ParlayGrid from './components/ParlayGrid';
import {
  calculatePotentialWin,
  refineParlayPayload,
  roundUpToTwoDecimalPlaces,
} from 'player/components/utils/helpers';
import { updateUserBalance } from 'store/users/userSlice';
import { resetWagerState } from 'store/wagers/wagerSlice';

const ParlayWager = ({ isOpen, handleClose }) => {
  const wager = useSelector((state) => state.wagersReducer);
  const [win, setWin] = useState();
  const [accumulatedOdds, setAccumulatedOdds] = useState();
  const [state, setState] = useState();
  const [stake, setStake] = useState(null);
  const dispatch = useDispatch();

  const { mutate, isLoading } = usePlaceBet();

  const handlePlaceBet = () => {
    const data = { ...wager, games: wager.parlay };
    delete data.parlay;
    const newData = refineParlayPayload(data);
    setAccumulatedOdds(newData.accumulatedOdds);
    setState((prev) => newData);
  };

  useEffect(() => {
    handlePlaceBet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wager]);

  const handleGetWinAmount = (e) => {
    const value = e.target.value;
    setStake(value);
    setWin(roundUpToTwoDecimalPlaces(value * accumulatedOdds - value));
  };

  const placeBet = () => {
    const data = {
      ...state,
      toWin: win,
      betType: 'parlay',
      stake: Number(stake),
      playerId: localStorage.getItem('accountId'),
    };
    console.log({ data });
    // mutate({ data });
    // handleClose();
    // dispatch(updateUserBalance(stake));
    // dispatch(resetWagerState());
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
          <Button variant="success" onClick={placeBet} isLoading={isLoading}>
            Place Wagers
          </Button>
        </>
      }
    >
      <WagerHeader items={wager?.parlay?.length} />
      {wager?.parlay?.map((item) => (
        <ParlayGrid
          data={item}
          gameInfo={{ ...item.gameInfo, market: item.market }}
        />
      ))}
      <Box display="flex" justifyContent="space-between" mt={24}>
        <FormControl width="200px">
          <FormLabel htmlFor="field1" display="block">
            Risking
          </FormLabel>
          <Input
            type="number"
            id="field1"
            onChange={handleGetWinAmount}
            value={stake}
          />
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
