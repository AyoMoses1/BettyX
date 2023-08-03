import endpoints from 'common/endpoints';
import { authAxios as axios } from 'setup/auth/axios';

class Services {
  async getAllAgents(param) {
    const response = await axios({
      method: 'GET',
      url: `${endpoints.agents}`,
    });
    return response?.data?.agents;
  }

  async createPlayers(payload) {
    const { agent, ...rest } = payload.data;
    const response = await axios({
      method: 'POST',
      url: `${endpoints.players}/${agent}`,
      data: rest.data,
    });
    return response?.data;
  }
}

export default new Services(); //eslint-disable-line
