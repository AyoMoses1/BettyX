import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Flex,
  GridItem,
  VStack,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import { addToGames, addToGamesForParlay } from 'store/wagers/wagerSlice';
import styled from 'styled-components';
import {
  decimalToAmericanOdds,
  decimalToFraction,
} from 'player/components/utils/helpers';

const initialState = {
  home: '',
  away: '',
  odd: null,
  market: null,
  prediction: '',
};

const DrawForm = ({
  odds,
  eventData,
  prediction,
  home,
  away,
  predictedLogo,
  market,
}) => {
  const [state, setState] = useState(initialState);
  const [game, setGame] = useState({});

  const [value, setValue] = React.useState('1');
  const label = odds ? decimalToFraction(odds[0]?.handicap) : 'No odd';

  const roundToTwoDecimalPlaces = (number) => {
    return Math.round(number * 100) / 100;
  };

  const dispatch = useDispatch();
  const inputElements = [
    {
      id: 1,
      type: 'number',
      prediction: 'home',
      value: odds ? odds[0]?.over_od : '',
      label: odds
        ? `O ${label} ${decimalToAmericanOdds(
            roundToTwoDecimalPlaces(odds[0]?.over_od)
          )}`
        : '',
    },
    {
      id: 2,
      type: 'number',
      prediction: 'away',
      value: odds ? odds[0]?.under_od : '',
      label: odds
        ? `U ${label} ${decimalToAmericanOdds(
            roundToTwoDecimalPlaces(odds[0]?.under_od)
          )}`
        : '',
    },
  ];

  const handleChange = (e, prediction, value, label) => {
    const game = {
      ...eventData,
      odd: Number(roundToTwoDecimalPlaces(value)),
      home: home?.name,
      away: away?.name,
      market: 1,
      prediction,
      label,
      predictedLogo: prediction === 'home' ? home?.image_id : home?.away_id,
    };
    setGame(game);
    dispatch(addToGamesForParlay(game));
  };

  return (
    <GridItem colSpan={2}>
      <Box>
        <form>
          <StyledBox>
            {inputElements.map((item, idx) => (
              <label className="custom-radio" key={item.id}>
                {item?.label}
                <input
                  type="radio"
                  name="parlay"
                  value={item.label}
                  onChange={(e) => handleChange(e, item.prediction, item.value, item?.label)}
                  className="custom-radio-input"
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </StyledBox>
        </form>
      </Box>
    </GridItem>
  );
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;

  .custom-radio {
    position: relative;
    padding-left: 30px; /* Adjust as needed */
    cursor: pointer;
  }

  .custom-radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 20;
    height: 20px; /* Adjust as needed */
    width: 20px; /* Adjust as needed */
    background-color: transparent;
    border: 2px solid #ccc; /* Border color for the checkbox */
    border-radius: 4px; /* Adjust as needed */
  }

  .custom-radio input:checked ~ .checkmark:after {
    content: '';
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px; /* Size of the checkmark */
    height: 8px; /* Size of the checkmark */
    border-radius: 50%;
    background-color: #333; /* Color of the checkmark when selected */
  }
`;

export default DrawForm;
