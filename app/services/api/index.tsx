import ApiRequest from './config';
import {Config} from '@app/libraries';

const API = {
  /**
   * ====================================================
   * AUTH
   * ====================================================
   */
  reqLogin: ApiRequest.post(Config.API_ENDPOINT + Config.API_LOGIN),
};

export default API;
