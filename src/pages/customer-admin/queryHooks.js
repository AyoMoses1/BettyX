import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { AxiosError, AxiosResponse } from 'axios';
import { useToast } from '@chakra-ui/react';
import paths from 'common/Paths';
import { useContext } from 'react';
import { CurrentPageContext } from 'App';

export const useGetAllAgentsWithPlayers = () => {
  return useQuery(['allPlayers'], () => Services.getAllAgentsWithPlayers());
};

export const useCreateAgent = () => {
  const { setCurrentPage } = useContext(CurrentPageContext);
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
      setCurrentPage(paths.agents)
    },
  });
};
