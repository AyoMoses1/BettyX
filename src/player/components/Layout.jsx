/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from 'react-router-dom';
import {
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';

import SideBar from './SideBar';
import Navbar from './NavBar';
import NavBarMain from './NavBarMain';

const Layout = () => {
  return (
    <Box bgColor="playerPrimary">
      <Box height="100px">
        <Navbar />
      </Box>
      <Grid
        height="calc(100vh - 100px)"
        templateColumns="repeat(5, 1fr)"
        overflow={'hidden'}
      >
        <GridItem height="100%" colSpan={[5, 5, 5, 1]} overflow="auto">
          <SideBar />
        </GridItem>
        <GridItem colSpan={[5, 5, 5, 4]} overflow="scroll">
          <Box display={{ base: "none", lg: "block" }}>
             <NavBarMain />
          </Box>
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
