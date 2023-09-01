import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { Box, useToast } from '@chakra-ui/react';

export const usePlaceBet = () => {
  const toast = useToast();
  return useMutation(Services.placeBet, {
    onError: (data) => {
      const errObj = data?.message;
       toast({ description: errObj.errorMsg, status: 'error', title: "Invalid Credential" })
    },
    onSuccess: (data, variables) => {
      toast({ description:  `Player's data has been updated successfully`, status: 'success', title: "Player data updated" })
    },
  });
};
