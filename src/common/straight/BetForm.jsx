import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Flex,
  GridItem,
} from '@chakra-ui/react';
import { addToGames } from 'store/wagers/wagerSlice';
import {
  decimalToFraction,
  decimalToAmericanOdds,
  roundUpToTwoDecimalPlaces,
  transformString,
} from 'player/components/utils/helpers';

const FormElements = ({
  item,
  handleChange,
  odd,
  market,
  odd_2_handicap,
  odd_3_handicap,
  market_3_prediction,
  marketOdd,
}) => {
  return (
    <Box>
      <FormControl>
        <Flex alignItems="center">
          <FormLabel htmlFor="input1">{item?.label}</FormLabel>
          <Input
            type={item.type}
            sx={{ borderRadius: '0px', width: '100px' }}
            onChange={(e) =>
              handleChange(
                e,
                odd,
                market,
                item?.label,
                odd_2_handicap,
                odd_3_handicap,
                market_3_prediction,
                marketOdd
              )
            }
          />
        </Flex>
      </FormControl>
    </Box>
  );
};

const initialState = {
  home: '',
  away: '',
  odd: null,
  market: null,
  prediction: '',
};

const BetForm = ({
  odds,
  eventData,
  prediction,
  home,
  away,
  predictedLogo,
  market_3_prediction,
}) => {
  const [state, setState] = useState(initialState);
  const label2 = decimalToFraction(odds?.odd_2_handicap);
  const label3 = decimalToFraction(odds?.odd_3_handicap);

  const roundToTwoDecimalPlaces = (number) => {
    return Math.round(number * 100) / 100;
  };
  const dispatch = useDispatch();
  const inputElements = [
    {
      name: 2,
      type: 'number',
      value: odds?.odd_2,
      marketOdd: decimalToAmericanOdds(roundToTwoDecimalPlaces(odds?.odd_2)),
      label: `${label2} ${decimalToAmericanOdds(
        roundToTwoDecimalPlaces(odds?.odd_2)
      )}`,
    },
    {
      name: 1,
      type: 'number',
      value: odds?.odd_1,
      marketOdd: decimalToAmericanOdds(roundToTwoDecimalPlaces(odds?.odd_1)),
      label: `${decimalToAmericanOdds(roundToTwoDecimalPlaces(odds?.odd_1))}`,
    },
    {
      name: 3,
      type: 'number',
      value: odds?.odd_3,
      marketOdd: decimalToAmericanOdds(roundToTwoDecimalPlaces(odds?.odd_3)),
      label: `${label3} ${decimalToAmericanOdds(
        roundToTwoDecimalPlaces(odds?.odd_3)
      )}`,
    },
  ];

  const handleChange = (
    e,
    odd,
    market,
    label,
    odd_2_handicap,
    odd_3_handicap,
    market_3_prediction,
    marketOdd
  ) => {
    console.log({marketOdd})
    const stake = parseInt(e.target.value);
    const game = {
      ...eventData,
      odd: roundUpToTwoDecimalPlaces(parseFloat(odd)),
      label,
      market,
      home,
      away,
      prediction: market === 3 ? market_3_prediction : prediction,
      predictedLogo,
      marketOdd,
      handicap:
        market === 1
          ? null
          : market === 2
          ? transformString(odd_2_handicap)
          : transformString(odd_3_handicap),
    };
    setState({ state, ...game });
    dispatch(
      addToGames({
        game,
        stake,
        playerId: localStorage.getItem('accountId'),
        predictedLogo,
      })
    );
  };

  return (
    <GridItem colSpan={2}>
      <Box>
        <form>
          <HStack spacing={4} justifyContent="center">
            {inputElements.map((item, idx) => (
              <FormElements
                item={item}
                key={idx}
                handleChange={handleChange}
                odd={item.value}
                label={item.label}
                marketOdd={item.marketOdd}
                odd_2_handicap={odds.odd_2_handicap}
                odd_3_handicap={odds.odd_3_handicap}
                market_3_prediction={market_3_prediction}
                // odd={parseFloat(item.label)}
                market={item.name}
              />
            ))}
          </HStack>
        </form>
      </Box>
    </GridItem>
  );
};

export default BetForm;
