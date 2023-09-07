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
} from '@chakra-ui/react';
import { addToGames } from 'store/wagers/wagerSlice';
import {
  decimalToAmericanOdds,
  decimalToFraction,
} from 'player/components/utils/helpers';

const FormElements = ({ item, handleChange, odd, market }) => {
  return (
    <Box>
      <FormControl>
        <Flex alignItems="center">
          <FormLabel htmlFor="input1">{item?.label}</FormLabel>
          <Input
            type={item.type}
            sx={{ borderRadius: '0px', width: '100px' }}
            onChange={(e) => handleChange(e, odd, market)}
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
      value: odds.odd_2,
      label: `${label2 ?? ''} ${decimalToAmericanOdds(
        roundToTwoDecimalPlaces(odds.odd_2)
      )}`,
    },
    {
      name: 1,
      type: 'number',
      value: odds.odd_1,
      label: `${decimalToAmericanOdds(roundToTwoDecimalPlaces(odds.odd_1))}`,
    },
    {
      name: 3,
      type: 'number',
      value: odds.odd_3,
      label: `${prediction === 'home' ? 'O' : 'U'} ${
        label3 ?? ''
      } ${decimalToAmericanOdds(roundToTwoDecimalPlaces(odds.odd_3))}`,
    },
  ];

  const handleChange = (e, odd, market) => {
    const stake = parseInt(e.target.value);
    const game = {
      ...eventData,
      odd: parseInt(odd, 10),
      market,
      home,
      away,
      prediction,
      predictedLogo,
      handicap: market === 1 ? null : '2.5',
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
