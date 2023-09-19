import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Flex,
  GridItem,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToGames } from 'store/wagers/wagerSlice';
import {
  decimalToAmericanOdds,
  roundUpToTwoDecimalPlaces,
} from 'player/components/utils/helpers';

const initialState = {
  home: '',
  away: '',
  odd: null,
  market: null,
  prediction: '',
};

const FormElements = ({ item, handleChange, odd, market, label }) => {
  return (
    <Box>
      <FormControl>
        <Flex alignItems="center">
          <FormLabel htmlFor="input1">{item?.label}</FormLabel>
          <Input
            type={item.type}
            sx={{ borderRadius: '0px', width: '100px' }}
            onChange={(e) => handleChange(e, odd, market, label)}
          />
        </Flex>
      </FormControl>
    </Box>
  );
};

const DrawForm = ({ odd, eventData, prediction, home, away, gameInfo }) => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const roundToTwoDecimalPlaces = (number) => {
    return Math.round(number * 100) / 100;
  };

  const handleChange = (e, odd, market, label) => {
    const stake = parseInt(e.target.value);
    const game = {
      ...eventData,
      odd: roundUpToTwoDecimalPlaces(parseFloat(odd)),
      market,
      label,
      home,
      away,
      prediction,
      handicap: market === 1 ? null : '2.5',
      gameInfo,
    };
    setState({ state, ...game });
    dispatch(
      addToGames({
        game,
        stake,
        playerId: localStorage.getItem('accountId'),
      })
    );
  };
  const inputElements = [
    {
      name: 1,
      type: 'number',
      value: odd,
      label: decimalToAmericanOdds(roundToTwoDecimalPlaces(odd)),
    },
  ];
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
                label={item.label}
                odd={item.value}
                market={item.name}
              />
            ))}
          </HStack>
        </form>
      </Box>
    </GridItem>
  );
};

export default DrawForm;
