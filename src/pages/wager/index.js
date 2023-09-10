import { Button } from '@chakra-ui/react';
import Drawer from 'common/Drawer';
import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeWager } from 'store/wagers/wagerSlice';
import FootballMatchesGrid from './components/helpers';
import TotalBox from './components/TotalBox';
import { usePlaceBet } from './queryHooks';
import { CurrentPageContext } from 'App';
import WagerHeader from './components/WagerHeader';

const Index = ({ isOpen, handleClose }) => {
  const wager = useSelector((state) => state.wagersReducer);
  const { mutate, isLoading } = usePlaceBet();
  const { currentTab } = useContext(CurrentPageContext);

  const handlePlaceBet = () => {
    const toWin = wager.games[0].odd * wager.stake - wager.stake;
    const { predictedLogo, ...gameData } = wager.games[0];
    const newPayload = { ...wager, games: [gameData] };
    const data = { ...newPayload, toWin, accumulatedOdds: wager.games[0].odd };
    delete data.parlay;
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
      <WagerHeader />
      {currentTab === 'straight' &&
        wager?.games?.map((item) => (
          <FootballMatchesGrid data={item} stake={wager?.stake} />
        ))}
    </Drawer>
  );
};

export default Index;
