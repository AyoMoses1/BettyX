import { useQuery } from '@tanstack/react-query';
import Services from './services';

export const useGetAllLeaguesBySport = (param) => {
  return useQuery([`allSoccerLeaguesFor${param.sport_id}`], () =>
    Services.getAllLeagues(param)
  );
};

export const useGetAllEventsBySportsAndLeague = (params) => {
  return useQuery(
    [`allLeagueEvents${params.league_id}`],
    () => Services.getAllEventsByLeague(params),
    {
      refetchInterval: 180000,
    }
  );
};
