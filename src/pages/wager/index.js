import { Button } from '@chakra-ui/react';
import Drawer from 'common/Drawer';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FootballMatchesGrid from './components/helpers';
import { usePlaceBet } from './queryHooks';
import { CurrentPageContext } from 'App';
import WagerHeader from './components/WagerHeader';
import {
  calculatePotentialWin,
  deleteNestedProperty,
  roundUpToTwoDecimalPlaces,
} from 'player/components/utils/helpers';
import { updateUserBalance } from 'store/users/userSlice';
import { resetWagerState } from 'store/wagers/wagerSlice';

const Index = ({ isOpen, handleClose }) => {
  const wager = useSelector((state) => state.wagersReducer);
  const { mutate, isLoading } = usePlaceBet();
  const { currentTab } = useContext(CurrentPageContext);
  const dispatch = useDispatch();

  const handlePlaceBet = () => {
    const toWin = roundUpToTwoDecimalPlaces(
      calculatePotentialWin(
        wager.games[0].market === 3
          ? wager.games[0].marketOdd
          : wager.games[0].label,
        wager.stake
      )
    );
    const { predictedLogo, ...gameData } = wager.games[0];
    const newPayload = { ...wager, games: [gameData] };
    const payload = {
      ...newPayload,
      toWin,
      accumulatedOdds: wager.games[0].odd,
      betType: 'straight',
    };
    const { parlay, ...data } = payload;
    deleteNestedProperty(data.games[0], ['label', 'marketOdd', 'gameInfo']);
    mutate({ data });
    dispatch(updateUserBalance(wager.stake));
    dispatch(resetWagerState());
    handleClose();
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
          <FootballMatchesGrid
            data={item}
            stake={wager?.stake}
            gameInfo={{ ...wager.games[0].gameInfo, market: item.market }}
            toWin={roundUpToTwoDecimalPlaces(
              calculatePotentialWin(
                item.market === 3 ? item.marketOdd : item.label,
                wager.stake
              )
            )}
          />
        ))}
    </Drawer>
  );
};

export default Index;
