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
  const dispatch = useDispatch();
  const inputElements = [
    {
      name: 2,
      type: 'number',
      label: odds.odd_2,
    },
    {
      name: 1,
      type: 'number',
      label: odds.odd_1,
    },
    {
      name: 3,
      type: 'number',
      label: odds.odd_3,
    },
  ];

  const handleChange = (e, odd, market) => {
    const stake = parseInt(e.target.value);
    const game = {
      ...eventData,
      odd,
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
                odd={parseFloat(item.label)}
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
