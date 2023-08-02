import endpoints from "common/endpoints";
import { authAxios as axios } from "setup/auth/axios";



class Services {
  async getAllPlayers(param) {
    const response = await  axios({
      method: "GET",
      url: `${endpoints.players}`,
    });
    return response?.data?.players
  };
}

export default new Services(); //eslint-disable-line