import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { Container, Grid, GridItem } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Container maxW="95%">
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
