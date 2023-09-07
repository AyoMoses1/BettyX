import endpoints from 'common/endpoints';
import { authAxios as axios } from 'setup/auth/axios';
import getURLParams from 'utils/getUrlParams';

class Services {
  async getAllLeagues(data) {
    const param = getURLParams(data);
    const response = await axios({
      method: 'GET',
      url: `${endpoints.leagues}${param}`,
    });
    return response?.data;
  }

  async getAllEventsByLeague(data) {
    const param = getURLParams(data);
    const response = await axios({
      method: 'GET',
      url: `${endpoints.eventsByLeague}${param}`,
    });
    if (Array.isArray(response?.data)) {
      return response?.data;
    } else {
      return response?.data?.results;
    }
  }

  async createAgent(payload) {
    const response = await axios({
      method: 'POST',
      url: `${endpoints.agents}`,
      data: payload.data,
    });
    return response?.data;
  }
}

export default new Services(); //eslint-disable-line
