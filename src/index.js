import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
