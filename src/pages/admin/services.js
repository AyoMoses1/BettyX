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

  async createAdmin(payload) {
    const response = await  axios({
      method: "POST",
      url: `${endpoints.admin}`,
      data: payload.data
    });
    return response?.data
  };
}

export default new Services(); //eslint-disable-line