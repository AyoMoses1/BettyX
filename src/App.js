import React, { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Agents from './pages/agents';
import Customers from './pages/customers';
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
import Cashier from './pages/cashier';
import SignIn from './pages/auth';
import Layout from './common/Layout';
import './App.css';

export const CurrentPageContext = createContext();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard />;
      case 'games':
        return <Games />;
      case 'messages':
        return <Messages />;
      case 'rules':
        return <Rules />;
      case 'statistics':
        return <Statistics />;
      case 'agents':
        return <Agents />;
      case 'settings':
        return <Settings />;
      case 'collections':
        return <Collections />;
      case 'billing':
        return <Billing />;
      case 'agent-admin':
        return <Agents />;
      case 'ticket-writer':
        return <TicketWriter />;
      case 'deleted-wagers':
        return <DeletedWagers />;
      case 'pending':
        return <Pending />;
      case 'customer-admin':
        return <CustomerAdmin />;
      case 'cashier':
        return <Cashier />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <CurrentPageContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          isModalOpen,
          isDrawerOpen,
          handleCloseModal,
          handleOpenModal,
          handleOpenDrawer,
          handleCloseDrawer,
        }}
      >
        <Layout setCurrentPage={setCurrentPage}>{renderPage()}</Layout>
        <Feedback />
        <Scores />
      </CurrentPageContext.Provider>
    </ChakraProvider>
  );
};

export default App;
