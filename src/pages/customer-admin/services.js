import endpoints from "common/endpoints";
import { authAxios as axios } from "setup/auth/axios";



class Services {
  async getAllAgentsWithPlayers(param) {
    const response = await  axios({
      method: "GET",
      url: `${endpoints.agentsWithPlayers}`,
    });
    return response?.data
  };
}

export default new Services(); //eslint-disable-line