import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Button,
  InputLeftAddon,
  Switch,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import generateGridInputs from 'common/DynamicGridForm';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useInputObj from './useInputObj';
import * as yup from 'yup';
import { useState } from 'react';
import { useGetAllAgents } from 'pages/agents/queryHooks';
import { handleCustomerPayload } from './utils';
import ActionModal from './components/ActionModal';
import { useCreatePlayers } from './queryHooks';

const schema = yup
  .object()
  .shape({
    numberOfAccounts: yup.string().required(),
    password: yup.string().required(),
    prefix: yup.string().required(),
    nextAccountStart: yup.number().required(),
  })
  .required();

const initialState = {
  numberOfAccounts: 1,
};

const initialAgentState = {
  agent: '',
  prefix: '',
  nextAccountStart: 1,
};

const NewCustomer = () => {
  const { inputObjList } = useInputObj();
  const [state, setState] = useState(initialState);
  const { data: agents } = useGetAllAgents();
  const [data, setData] = useState([]);
  const { mutate } = useCreatePlayers();
  const [agentDetails, setAgentDetails] = useState(initialAgentState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'agent') {
      const selectedOptionObject = agents.find(
        (option) => option.accountId === value
      );
      const { accountId, prefix, nextAccountStart } = selectedOptionObject;
      setAgentDetails((prev) => ({
        ...prev,
        agent: accountId,
        prefix,
        nextAccountStart,
      }));
      return 1;
    }
    setState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitWithConfirmation = (data) => {
    onOpen();
    setData(data);
  };

  const onSubmit = () => {
    const data = handleCustomerPayload({ ...state, ...agentDetails });
    mutate({ data: { data, agent: agentDetails.agent } });
    setState(initialState);
    setAgentDetails(initialAgentState);
  };

  return (
    <Box m={4} bg="#ececec">
      <Flex justify="space-between" bg="blue" align="center" px={4}>
        <Heading variant="h1" color="#fff">
          Add Player
        </Heading>
        <Button
          variant="success"
          px={4}
          my={2}
          size={['sm', 'md']}
          onClick={onOpen}
        >
          Continue
        </Button>
      </Flex>
      <form onSubmit={handleSubmit(onSubmitWithConfirmation)}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          p={8}
          gap={4}
        >
          {inputObjList(
            register,
            handleChange,
            state,
            agentDetails,
            errors
          ).map((input, idx) => (
            <Box key={idx}>{generateGridInputs(input)}</Box>
          ))}
          <GridItem alignSelf="center" mt={8}>
            <FormControl display="flex" alignItems="center">
              <Switch id="switch" colorScheme="whatsapp" size="md" mr={2} />
              <FormLabel htmlFor="switch" mr={2}>
                Generate random password (ex: A7B3)
              </FormLabel>
            </FormControl>
          </GridItem>
        </Grid>
      </form>
      <ActionModal
        title="Create Players"
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={() => {
          onClose();
          onSubmit();
        }}
      />
    </Box>
  );
};

export default NewCustomer;
