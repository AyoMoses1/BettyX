import {
  Box,
  Grid,
  Heading,
  Flex,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ActionModal from './components/ActionModal';
import { useState } from 'react';
import { useCreateAgent } from './queryHooks';
import { inputObjList } from './helpers';
import generateGridInputs from 'common/DynamicGridForm';

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
  nextAccountStart: 1,
};

const NewAdmin = () => {
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
    setData(initialState);
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
          <form>
            <Grid
              templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
              p={8}
              gap={4}
            >
              {inputObjList(register, handleChange, data, errors).map(
                (input, idx) => (
                  <Box key={idx}>{generateGridInputs(input)}</Box>
                )
              )}
            </Grid>
          </form>
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

export default NewAdmin;
