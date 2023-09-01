import endpoints from 'common/endpoints';
import { authAxios as axios } from 'setup/auth/axios';

class Services {
    async placeBet(payload) {
    const response = await axios({
      method: 'POST',
      url: `${endpoints.placeBet}`,
      data: payload.data,
    });
    return response?.data;
  }
}

export default new Services(); //eslint-disable-line
