import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { Box, useToast } from '@chakra-ui/react';

export const useGetAllLeaguesBySport = (param) => {
  return useQuery([`allSoccerLeaguesFor${param.sport_id}`], () =>
    Services.getAllLeagues(param)
  );
};

export const useGetAllEventsBySportsAndLeague = (params) => {
  return useQuery([`allLeagueEvents${params.league_id}`], () =>
    Services.getAllEventsByLeague(params)
  );
};
