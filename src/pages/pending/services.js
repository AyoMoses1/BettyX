import endpoints from "common/endpoints";
import { authAxios as axios } from "setup/auth/axios";



class Services {
  async getAllBets(param) {
    const response = await  axios({
      method: "GET",
      url:
      localStorage.user_role !== 'agent'
        ? `${endpoints.adminAllBets}`
        : `${endpoints.agentAllBets}`,
    });
    return response?.data?.bets
  };

}

export default new Services(); //eslint-disable-line