import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import reportWebVitals from './reportWebVitals';
import { setupAuthAxios, setupPublicAxios } from 'setup/auth/axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
const accessToken = localStorage.getItem('bet_token');
setupPublicAxios(process.env.REACT_APP_BASE_URL);
setupAuthAxios(process.env.REACT_APP_BASE_URL, accessToken);

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);

reportWebVitals();
