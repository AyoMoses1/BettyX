import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Flex,
  Button,
  InputGroup,
  InputLeftAddon,
  Switch,
  FormErrorMessage,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';
import ActionModal from './components/ActionModal';
import { useState } from 'react';
import { useCreateAgent } from './queryHooks';

const schema = yup
  .object()
  .shape({
    accountId: yup.string().required(),
    password: yup.string().required(),
    prefix: yup.string().required(),
    nextAccountStart: yup.number().required(),
  })
  .required();

const initialState = {
  accountId: '',
  password: '',
  prefix: '',
  nextAccountStart: 1
}

const NewAgent = () => {
  const { mutate, isLoading } = useCreateAgent();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActionModalConfirmed, setActionModalConfirmed] = useState(false);
  const [data, setData] = useState(initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    mutate({ data });
    setData(initialState)
  };

  const onSubmitWithConfirmation = (data) => {
    onOpen();
    setData(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitWithConfirmation)}>
        <Box m={4} bg="#ececec">
          <Flex justify="space-between" bg="blue" align="center" px={4}>
            <Heading variant="h1" color="#fff">
              Add Agent
            </Heading>
            <Button
              variant="success"
              px={4}
              my={2}
              size={['sm', 'md']}
              type="submit"
            >
              Continue
            </Button>
          </Flex>
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            p={8}
            gap={4}
          >
            <GridItem>
              <FormControl id="name">
                <FormLabel>Agent Name</FormLabel>
                <Input type="text" {...register('accountId')} value={data.name} onChange={handleChange}/>
                {errors?.accountId && (
                  <FormErrorMessage>Enter a valid player ID</FormErrorMessage>
                )}
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="password">
                <FormLabel>Agent Password</FormLabel>
                <Input type="text" {...register('password')} value={data.password} onChange={handleChange}/>
                {errors?.password && (
                  <FormErrorMessage>Enter a valid password</FormErrorMessage>
                )}
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="prefix">
                <FormLabel>Agent Prefix</FormLabel>
                <Input type="text" {...register('prefix')} value={data.prefix} onChange={handleChange}/>
                {errors?.prefix && (
                  <FormErrorMessage>
                    Enter a valid Agent Prefix
                  </FormErrorMessage>
                )}
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="nextAccountStart">
                <FormLabel>Next Account Starts #</FormLabel>
                <Input
                  type="text"
                  {...register('nextAccountStart')}
                  value={data.nextAccountStart}
                />
              </FormControl>
            </GridItem>
          </Grid>
        </Box>
      </form>
      <ActionModal
        title="Create Agent"
        isOpen={isOpen}
        onClose={onClose}
        isLoading={isLoading}
        handleSubmit={() => {
          setActionModalConfirmed(true);
          onClose();
          onSubmit();
        }}
      />
    </>
  );
};

export default NewAgent;
