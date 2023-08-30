import React, { useContext } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import Drawer from 'common/Drawer';
import FootballMatchesGrid from './components/helpers';
import styled from 'styled-components';
import TotalBox from './components/TotalBox';

const Index = ({ isOpen, handleClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={handleClose}
      title="Scoreboard"
      size="md"
      button={
        <>
          <Button variant="primary" onClick={handleClose}>
            Clear All
          </Button>
          <Button variant="success">Place Wager(s)</Button>
        </>
      }
    >
      <FootballMatchesGrid />
      <TotalBox/>
    </Drawer>
  );
};

export default Index;
