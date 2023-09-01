import endpoints from 'common/endpoints';
import { authAxios as axios } from 'setup/auth/axios';

class Services {
  async getPlayerDetails(param) {
    const response = await axios({
      method: 'GET',
      url: `${endpoints.players}/${param}`,
    });
    return response?.data?.player;
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
  
  async updatePlayer(payload) {
    const { accountId, ...rest } = payload;
    const response = await axios({
      method: 'PATCH',
      url: `${endpoints.players}/${accountId}`,
      data: rest,
    });
    return response?.data;
  }

  async getAllAgentsWithPlayers(param) {
    const response = await  axios({
      method: "GET",
      url: `${endpoints.agentsWithPlayers}`,
    });
    return response?.data
  };
}

export default new Services(); //eslint-disable-line
