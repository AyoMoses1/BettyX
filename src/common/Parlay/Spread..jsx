import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Flex,
  Text,
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

const SpreadForm = ({
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
      value: odds ? roundToTwoDecimalPlaces(odds[0]?.home_od) : '',
      label: odds
        ? `${label} ${decimalToAmericanOdds(
            roundToTwoDecimalPlaces(odds[0]?.home_od)
          )}`
        : '',
    },
    {
      id: 2,
      type: 'number',
      prediction: 'away',
      value: odds ? roundToTwoDecimalPlaces(odds[0]?.away_od) : '',
      label: odds
        ? `${label} ${decimalToAmericanOdds(
            roundToTwoDecimalPlaces(odds[0]?.away_od)
          )}`
        : '',
    },
  ];

  const [selectedPrediction, setSelectedPrediction] = useState(null);

  const handleChange = (e, prediction, value, label) => {
    if (selectedPrediction === prediction) {
      setSelectedPrediction(null); // If the clicked box is already selected, unselect it
    } else {
      setSelectedPrediction(prediction);
    }

    const game = {
      ...eventData,
      odd: Number(roundToTwoDecimalPlaces(value)),
      home: home?.name,
      away: away?.name,
      market: 1,
      prediction,
      label,
      predictedLogo: prediction === 'home' ? home?.image_id : away?.image_id,
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
              <Box
                p={2}
                borderWidth={1}
                textAlign="center"
                width="100%"
                cursor="pointer"
                onClick={(e) =>
                  handleChange(e, item.prediction, item.value, item?.label)
                }
                key={item.id}
                bgColor={
                  selectedPrediction === item.prediction
                    ? 'black'
                    : 'transparent'
                }
                color={
                  selectedPrediction === item.prediction ? 'white' : 'inherit'
                }
              >
                {item?.label}
              </Box>
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

  // .custom-radio {
  //   position: relative;
  //   padding-left: 30px; /* Adjust as needed */
  //   cursor: pointer;
  // }

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

export default SpreadForm;
