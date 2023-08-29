import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import SoccerBox from 'common/SoccerBox';
import { results } from 'pages/agents/components/data';
import { AiOutlineInbox } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useGetAllEventsBySportsAndLeague } from './queryHooks';
import styled from 'styled-components';
import Heading from './Heading';

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
  const { data } = useGetAllEventsBySportsAndLeague({
    sport_id: location?.state?.sportId,
    league_id: location?.state?.id,
  });

  return (
    <Box>
      <Heading />
      {data?.length ? (
        data?.map((item) => <SoccerBox data={item} key={item.id} />)
      ) : (
        <NoDataBox />
      )}
    </Box>
  );
};
export default Index;
