import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { AxiosError, AxiosResponse } from 'axios';
import { useToast } from '@chakra-ui/react';
import paths from 'common/Paths';
import { useContext } from 'react';
import { CurrentPageContext } from 'App';

export const useGetPlayerDetails = (accountId) => {
  return useQuery(['playerDetails'], () => Services.getPlayerDetails(accountId));
};

