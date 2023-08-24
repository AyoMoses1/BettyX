const endpoints = {
  login: '/auth',
  signup: '/users/signup',
  projects: '/projects',
  clients: '/clients',
  tasks: '/tasks',
  agentsWithPlayers: '/agent/allAgentsWithPlayers?sort=date',
  adminWeeklyFigures: '/analytics/getAdminWeeklyFigures',
  agentWeeklyFigures: `/analytics/agentWeeklyFigures/${localStorage.accountId}`,
  agents: '/agent',
  players: '/player',
  admin: '/admin',
  leagues: '/events/view-leagues',
  eventsByLeague: '/events/league-events',
  agentPlayers: `/player/findPlayersByAgent/${localStorage.accountId}?sort=accountId`
};

export default endpoints;
