import React, { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Agents from './pages/agents';
import Dashboard from './pages/dashboard';
import Games from './pages/games';
import Messages from './pages/messages';
import Rules from './pages/rules';
import Settings from './pages/settings';
import Statistics from './pages/statistics';
import Collections from './pages/collections';
import Feedback from './pages/feedback';
import Billing from './pages/billing';
import TicketWriter from './pages/ticket';
import Scores from './pages/scores';
import DeletedWagers from './pages/wagers';
import Pending from './pages/pending';
import CustomerAdmin from './pages/customer-admin';
import AddCustomer from './pages/customers';
import LiveLimits from './pages/live-limits';
import Cashier from './pages/cashier';
import Analysis from './pages/analysis';
import AgentPerformance from './pages/agents/Performance';
import NewCustomer from './pages/customers/NewCustomer';
import Transactions from './pages/transactions';
import IPTracker from './pages/ip-tracker';
import CustomerDetails from './pages/customers/CustomerDetails';
import Layout from './common/Layout';
import PlayerLayout from 'player/components/Layout';
import Player from './player/index';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import paths from 'common/Paths';
import NewAgent from 'pages/agents/NewAgent';
import { useEffect } from 'react';
import { setupAuthAxios, setupPublicAxios } from 'setup/auth/axios';
import UnAuthorized from 'pages/auth/UnAuthorized';
import AuthGuard from 'setup/auth/AuthGuard';
import SignIn from 'pages/auth';
import UpNext from 'player/pages/up-next';
import Featured from 'player/pages/featured';
import LiveStreaming from 'player/pages/live-streaming';
import Baseball from 'player/pages/baseball';
import Basketball from 'player/pages/basketball';
import Football from 'player/pages/football';
import Soccer from 'player/pages/soccer';
import Golf from 'player/pages/golf';
import MartialArts from 'player/pages/martial-arts';
import Boxing from 'player/pages/boxing';
import Tennis from 'player/pages/tennis';
import AutoRacing from 'player/pages/auto-racing';
import Cricket from 'player/pages/cricket';

export const CurrentPageContext = createContext();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setupPublicAxios(process.env.REACT_APP_BASE_URL);
    setupAuthAxios(process.env.REACT_APP_BASE_URL, localStorage.bet_token);
  }, [accessToken]);

  return (
    <ChakraProvider theme={theme}>
      <CurrentPageContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          accessToken,
          setAccessToken,
          isModalOpen,
          isDrawerOpen,
          handleCloseModal,
          handleOpenModal,
          handleOpenDrawer,
          handleCloseDrawer,
        }}
      >
        <Routes>
          <Route path={paths.login} element={<SignIn />} />
          <Route path={paths.unauthorized} element={<UnAuthorized />} />
          <Route
            path={paths.home}
            element={
              <RequireAuth>
                <PlayerLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Player />} />
            <Route path="up-next" element={<UpNext />} />
            <Route path="featured" element={<Featured />} />
            <Route path="live-streaming" element={<LiveStreaming />} />
            <Route path="baseball" element={<Baseball />} />
            <Route path="football" element={<Football />} />
            <Route path="basketball" element={<Basketball />} />
            <Route path="soccer" element={<Soccer />} />
            <Route path="golf" element={<Golf />} />
            <Route path="martial-arts" element={<MartialArts />} />
            <Route path="boxing" element={<Boxing />} />
            <Route path="tennis" element={<Tennis />} />
            <Route path="auto-racing" element={<AutoRacing />} />
            <Route path="cricket" element={<Cricket />} />
          </Route>
          <Route
            // path={paths.dashboard}
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route element={<AuthGuard authRoles="agent admin super-admin" />}>
              <Route path={paths.dashboard} element={<Dashboard />} />
              <Route path={paths.games} element={<Games />} />
              <Route path={paths.messages} element={<Messages />} />
              <Route path={paths.rules} element={<Rules />} />
              <Route path={paths.statistics} element={<Statistics />} />
              <Route path={paths.agents} element={<Agents />} />
              <Route path={paths.settings} element={<Settings />} />
              <Route path={paths.collections} element={<Collections />} />
              <Route path={paths.billing} element={<Billing />} />
              <Route path={paths.ticketWriter} element={<TicketWriter />} />
              <Route path={paths.deletedWagers} element={<DeletedWagers />} />
              <Route path={paths.pending} element={<Pending />} />
              <Route path={paths.agentAdmin} element={<Agents />} />
              <Route path={paths.analysis} element={<Analysis />} />
              <Route path={paths.ipTracker} element={<IPTracker />} />
              <Route path={paths.transactions} element={<Transactions />} />
            </Route>
            <Route
              path={paths.customers}
              element={<AuthGuard authRoles="agent admin" />}
            >
              <Route index element={<CustomerAdmin />} />
              <Route path=":customerId" element={<CustomerDetails />} />
            </Route>
            <Route path={paths.cashier} element={<Cashier />} />
            <Route path={paths.liveLimits} element={<LiveLimits />} />
            <Route path={paths.addCustomer} element={<NewCustomer />} />
            <Route path={paths.addAgent} element={<NewAgent />} />
            <Route
              path={paths.agentPerformance}
              element={<AgentPerformance />}
            />
          </Route>
        </Routes>
        {currentPage === '/feedback' ? <Feedback /> : <AddCustomer />}
        <Scores />
      </CurrentPageContext.Provider>
    </ChakraProvider>
  );
};

export default App;

function RequireAuth({ children }) {
  let location = useLocation();

  if (!localStorage.bet_token) {
    return <Navigate to={paths.login} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
