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
}

export default new Services(); //eslint-disable-line