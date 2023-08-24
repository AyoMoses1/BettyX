import endpoints from "common/endpoints";
import { authAxios as axios } from "setup/auth/axios";



class Services {
  async getAdminWeeklyFigures(param) {
    const response = await  axios({
      method: "GET",
      url: `${endpoints.adminWeeklyFigures}`,
    });
    return response?.data
  };

}

export default new Services(); //eslint-disable-line