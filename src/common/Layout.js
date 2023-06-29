import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box height="100%">
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
