import endpoints from "common/endpoints";
import { authAxios as axios } from "setup/auth/axios";



class Services {
  async getAdminWeeklyFigures(param) {
    const response = await  axios({
      method: "GET",
      url:
      localStorage.user_role !== 'agent'
        ? `${endpoints.adminWeeklyFigures}`
        : `${endpoints.agentWeeklyFigures}`,
    });
    return response?.data
  };

}

export default new Services(); //eslint-disable-line