import React from 'react';
import NavBar from './NavBar';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <Box height="100%">
      <NavBar/>
      <Outlet/>
      {/* {children} */}
    </Box>
  );
};

export default Layout;
