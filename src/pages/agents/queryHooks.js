import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { AxiosError, AxiosResponse } from 'axios';
import { useToast } from '@chakra-ui/react';

export const useGetAllAgents = () => {
  return useQuery(['allPlayers'], () => Services.getAllAgents());
};

export const useCreateAgent = () => {
  const toast = useToast();

  return useMutation(Services.createAgent, {
    onError: (data) => {
      console.log(data, 'failed');
      const errObj = data.response;
      toast({
        title: 'Error',
        description: errObj?.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    },
    onSuccess: (data) => {
      console.log(data, 'success');
      toast({
        title: 'Agent account created.',
        description: "We've created the account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'bottom-left',
      });
    },
  });
};
