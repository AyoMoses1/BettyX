import endpoints from "common/endpoints";
import { authAxios as axios } from "setup/auth/axios";



class Services {
  async getAllAgents(param) {
    const response = await  axios({
      method: "GET",
      url: `${endpoints.agents}`,
    });
    return response?.data?.agents
  };

  async createAgent(payload) {
    const response = await  axios({
      method: "POST",
      url: `${endpoints.agents}`,
      data: payload.data
    });
    return response?.data
  };
}

export default new Services(); //eslint-disable-line