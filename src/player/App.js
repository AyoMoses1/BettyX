import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Basketball from './pages/basketball';
import AutoRacing from './pages/auto-racing';
import Baseball from './pages/baseball';
import Boxing from './pages/boxing';
import Featured from './pages/featured';
import Football from './pages/football';
import Golf from './pages/golf';
import LiveStreaming from './pages/live-streaming';
import MartialArts from './pages/martial-arts';
import Soccer from './pages/soccer';
import Tennis from './pages/tennis';
import UpNext from './pages/up-next';
import Cricket from './pages/cricket';
import Layout from './components/Layout';
import paths from './components/utils/paths';

export const App = () => {
  return (
    // <ChakraProvider theme={theme}>
      <Routes>
        <Route path={paths.home}>
          <Route path={paths.upNext} element={<UpNext />} />
          <Route path={paths.featured} element={<Featured />} />
          <Route path={paths.liveStreaming} element={<LiveStreaming />} />
          <Route path={paths.baseball} element={<Baseball />} />
          <Route path={paths.football} element={<Football />} />
          <Route path={paths.basketball} element={<Basketball />} />
          <Route path={paths.soccer} element={<Soccer />} />
          <Route path={paths.golf} element={<Golf />} />
          <Route path={paths.martialArts} element={<MartialArts />} />
          <Route path={paths.boxing} element={<Boxing />} />
          <Route path={paths.tennis} element={<Tennis />} />
          <Route path={paths.autoRacing} element={<AutoRacing />} />
          <Route path={paths.cricket} element={<Cricket />} />
        </Route>
        {/*
        <Route path={paths.forgotPassword} element={<ForgotPassword />} />
        <Route path={paths.enterNewPassword} element={<EnterNewPassword />} />
        <Route path={paths.passwordCreated} element={<PasswordCreated />} /> */}
      </Routes>
    // </ChakraProvider>
  );
};
