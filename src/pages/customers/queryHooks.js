import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { useToast } from '@chakra-ui/react';

export const useGetAllAgents = () => {
  return useQuery(['allPlayers'], () => Services.getAllAgents());
};

export const useCreatePlayers = () => {
  const toast = useToast();

  return useMutation(Services.createPlayers, {
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
        title: 'Players account created.',
        description: "We've created the accounts for you successfully",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'bottom-left',
      });
    },
  });
};
