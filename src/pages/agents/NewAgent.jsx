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
} from '@chakra-ui/react';
import { useCreateAgent } from 'pages/customer-admin/queryHooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';

const schema = yup
  .object()
  .shape({
    accountId: yup.string().required(),
    password: yup.string().required(),
    prefix: yup.string().required(),
    nextAccountStart: yup.string().required(),
  })
  .required();

const NewAgent = () => {
  const { mutate, isLoading } = useCreateAgent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    mutate({ data });
  };

  return (
    <Box m={4} bg="#ececec">
      <Flex justify="space-between" bg="blue" align="center" px={4}>
        <Heading variant="h1" color="#fff">
          Add Agent
        </Heading>
        <Button variant="success" px={4} my={2} size={['sm', 'md']}>
          Continue
        </Button>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          p={8}
          gap={4}
        >
          <GridItem>
            <FormControl id="name">
              <FormLabel>Agent Name</FormLabel>
              <Input type="text" {...register('accountId')} />
              {errors?.accountId && (
                <FormErrorMessage>Enter a valid player ID</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="password">
              <FormLabel>Agent Password</FormLabel>
              <Input type="text" {...register('password')} />
              {errors?.password && (
                <FormErrorMessage>Enter a valid password</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="prefix">
              <FormLabel>Agent Prefix</FormLabel>
              <Input type="text" {...register('prefix')} />
              {errors?.prefix && (
                <FormErrorMessage>Enter a valid Agent Prefix</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="nextAccountStart">
              <FormLabel>Next Account Starts #</FormLabel>
              <Input type="text" {...register('nextAccountStart')} />
            </FormControl>
          </GridItem>
          <Button
            type="submit"
            size="lg"
            bgColor="blue2"
            width="full"
            borderRadius="none"
            variant="secondary"
            onClick={() => handleSubmit(onSubmit)}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default NewAgent;

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0 !important;
  border-radius: 0px !important;
`;
