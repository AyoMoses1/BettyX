import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { Box, useToast } from '@chakra-ui/react';

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
        position: 'bottom-left',
        render: () => (
          <Box
            position="relative"
            bgColor="green"
            color="white"
            borderRadius="lg"
            p={3}
            maxWidth="300px"
          >
            <Box fontWeight="bold" fontSize="lg" marginBottom="2">
              Players Created Successfully!
            </Box>
          </Box>
        ),
      });
    },
  });
};
