import { Button } from '@chakra-ui/react';
import Drawer from 'common/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { placeWager } from 'store/wagers/wagerSlice';
import FootballMatchesGrid from './components/helpers';
import TotalBox from './components/TotalBox';
import { usePlaceBet } from './queryHooks';

const Index = ({ isOpen, handleClose }) => {
  const wager = useSelector((state) => state.wagersReducer);
  const { mutate, isLoading } = usePlaceBet();

  const handlePlaceBet = () => {
    const toWin = wager.games[0].odd * wager.stake - wager.stake;
    const data = { ...wager, toWin, accumulatedOdds: wager.games[0].odd };
    mutate({ data });
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
            Place Wager(s)
          </Button>
        </>
      }
    >
      <wagerHeader />
      {wager?.games?.map((item) => (
        <FootballMatchesGrid data={item} />
      ))}
      {/* <FootballMatchesGrid /> */}
      <TotalBox />
    </Drawer>
  );
};

export default Index;
