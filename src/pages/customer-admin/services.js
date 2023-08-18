import endpoints from 'common/endpoints';
import { authAxios as axios } from 'setup/auth/axios';

class Services {
  async getAllAgentsWithPlayers(param) {
    const response = await axios({
      method: 'GET',
      url:
        localStorage.user_role !== 'agent'
          ? `${endpoints.agentsWithPlayers}`
          : `${endpoints.agentPlayers}`,
    });
    return localStorage.user_role !== 'agent'
      ? response?.data
      : response?.data;
  }
}

export default new Services(); //eslint-disable-line
