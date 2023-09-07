import {
  Box,
  CircularProgress,
  Flex,
  Grid,
  GridItem,
  Progress,
  Text,
} from '@chakra-ui/react';
import SoccerBox from 'common/SoccerBox';
import { results } from 'pages/agents/components/data';
import { AiOutlineInbox } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useGetAllEventsBySportsAndLeague } from './queryHooks';
import styled from 'styled-components';
import Heading from './Heading';
import { CurrentPageContext } from 'App';
import { useContext } from 'react';
import ParlayBox from 'common/ParlayBox';

const NoDataBox = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="200px"
      bg="gray.100"
      borderRadius="md"
      boxShadow="md"
      m={8}
      flexDirection="column"
    >
      <Box as={AiOutlineInbox} color="gray.500" fontSize="5xl" />
      <Text mt={4} color="gray.600" fontSize="lg">
        No data available.
      </Text>
    </Flex>
  );
};

const Index = () => {
  const location = useLocation();
  const { currentTab } = useContext(CurrentPageContext);
  const { data, isLoading } = useGetAllEventsBySportsAndLeague({
    sport_id: location?.state?.sportId ?? 1, //Get all leagues for soccer as the default
    league_id: location?.state?.id ?? 94, //Get all upcoming events for EPL as the default
  });

  return (
    <Box>
      <Heading />
      {isLoading ? (
        <Box mt="15%" mx="auto" width="10%">
          <CircularProgress
            value={30}
            color="purple"
            thickness="12px"
            isIndeterminate
            size="50px"
          />
        </Box>
      ) : data.length === 0 ? (
        // Render something else when data is empty
        <NoDataBox />
      ) : (
        // Render the data items
        data.map((item) => <SoccerBox data={item} key={item.id} />)
      )}
      {/* {currentTab === 'straight' && data?.length ? (
        data?.map((item) => <SoccerBox data={item} key={item.id} />)
      ) : (
        <Box mt="15%" mx="auto" width="10%">
          <CircularProgress
            value={30}
            color="purple"
            thickness="12px"
            isIndeterminate
            size="50px"
          />
        </Box>
      )} */}

      {/* {currentTab === 'parlay' && data?.length ? (
        data?.map((item) => <ParlayBox data={item} key={item.id} />)
      ) : (
        <CircularProgress
          value={30}
          color="orange.400"
          thickness="12px"
          isIndeterminate
        />
      )} */}
    </Box>
  );
};
export default Index;
