import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container maxW="95%">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
