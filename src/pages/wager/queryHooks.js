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
              Bet placed successfully!!!
            </Box>
          </Box>
        ),
      });
    },
  });
};
