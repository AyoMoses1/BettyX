import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import services from './services';
import { useContext } from 'react';
import { CurrentPageContext } from './../../App';
import paths from 'common/Paths';

export const useSignIn = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setCurrentPage, setAccessToken } = useContext(CurrentPageContext);

  return useMutation(services.signin, {
    onError: (data) => {
      toast({
        title: 'message',
        description: `${data?.response?.data?.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    },
    onSuccess: (data) => {
      setAccessToken(data.data.token);
      const user_object = {
        bet_token: data.data.token,
        accountId: data.data.user.accountId,
        user_role: data.data.user.role,
        user_prefix: data.data.user.prefix,
        nextAccountStart: data.data.user.nextAccountStart,
        balance: data.data.user.balance,
        available: data.data.user.available,
        pending: data.data.user.pending,
      };
      localStorage.setItem('user', JSON.stringify(user_object));
      localStorage.setItem('bet_token', data.data.token);
      localStorage.setItem('accountId', data.data.user.accountId);
      localStorage.setItem('user_role', data.data.user.role);
      localStorage.setItem('user_prefix', data.data.user.prefix);
      localStorage.setItem('nextAccountStart', data.data.user.nextAccountStart);
      setCurrentPage(paths.home);
      navigate(data.data.user.role === 'player' ? paths.soccer : paths.dashboard);
    },
  });
};
