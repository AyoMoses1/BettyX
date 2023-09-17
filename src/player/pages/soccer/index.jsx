import {
  Box,
  CircularProgress,
  Flex,
  Text,
} from '@chakra-ui/react';
import SoccerBox from 'common/SoccerBox';
import { AiOutlineInbox } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useGetAllEventsBySportsAndLeague } from './queryHooks';
import Heading from './Heading';
import { CurrentPageContext } from 'App';
import { useContext } from 'react';
import ParlayBox from 'common/Parlay/Box';

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
      {currentTab === 'straight' && isLoading && (
        <Box mt="15%" mx="auto" width="10%">
          <CircularProgress
            value={30}
            color="purple"
            thickness="12px"
            isIndeterminate
            size="50px"
          />
        </Box>
      )}
      {currentTab === 'straight' && data?.length === 0 ? <NoDataBox /> : null}
      {currentTab === 'straight' && data?.length > 0
        ? data.map((item) => <SoccerBox data={item} key={item.id} />)
        : null}
      {currentTab === 'parlay' && isLoading && (
        <Box mt="15%" mx="auto" width="10%">
          <CircularProgress
            value={30}
            color="purple"
            thickness="12px"
            isIndeterminate
            size="50px"
          />
        </Box>
      )}
      {currentTab === 'parlay' && data?.length === 0 ? <NoDataBox /> : null}
      {currentTab === 'parlay' && data?.length > 0
        ? data.map((item) => <ParlayBox data={item} key={item.id} />)
        : null}
    </Box>
  );
};
export default Index;
