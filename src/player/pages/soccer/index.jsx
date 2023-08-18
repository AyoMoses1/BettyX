import { Box } from '@chakra-ui/react';
import SoccerBox from 'common/SoccerBox';
import { results } from 'pages/agents/components/data';
import { useLocation } from 'react-router-dom';
import { useGetAllEventsBySportsAndLeague } from './queryHooks';

const Index = () => {
  const location = useLocation();
  const { data } = useGetAllEventsBySportsAndLeague({
    sport_id: location?.state?.sportId,
    league_id: location?.state?.id,
  });
  return (
    <Box>
      {data?.results?.map((item) => (
        <SoccerBox data={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Index;
