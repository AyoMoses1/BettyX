import { useGetAllLeaguesBySport } from 'player/pages/soccer/queryHooks';
import { useEffect } from 'react';

const useGetAllLeagues = () => {
  const { data: soccerLeagues } = useGetAllLeaguesBySport({ sport_id: 1 });
  const { data: footballLeagues } = useGetAllLeaguesBySport({ sport_id: 12 });

  return {
    footballLeagues,
    soccerLeagues,
  };
};

export default useGetAllLeagues;
