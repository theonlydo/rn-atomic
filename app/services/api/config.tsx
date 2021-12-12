import {AuthState, store} from '@app/data';
import {DeviceInfo, CryptoJS} from '@app/libraries';
import axios from 'axios';
import _ from 'lodash';
import {Platform} from 'react-native';

interface Payload {
  headers?: any;
  params?: any;
  body?: any;
  public?: boolean;
}

interface RequestConfig {
  method: any;
  url: any;
  headers?: any;
  data?: any;
}

export const apiInstance = axios.create({
  timeout: 45000,
  validateStatus: status => status >= 200 && status < 300,
});

class ApiRequest {
  static get(route: string) {
    return (payload: Payload) => this.request('GET', route, payload);
  }

  static put(route: string) {
    return (payload: Payload) => this.request('PUT', route, payload);
  }

  static post(route: string) {
    return (payload: Payload) => this.request('POST', route, payload);
  }

  static delete(route: string) {
    return (payload: Payload) => this.request('DELETE', route, payload);
  }

  /**
   * handle url params, input object, return string
   * @param {object} params
   */
  static resolveParams(params: any) {
    const paramsResult: string[] = [];
    Object.keys(params).map(e => paramsResult.push(`${e}=${params[e]}`));
    return `?${paramsResult.join('&')}`;
  }

  /**
   * resolve response
   * @param {object} res
   * @param {string} url
   */
  static async resolveResponse(res: any) {
    if (res && res.code) {
    }
  }

  static resolveError() {}

  /**
   * handle API request
   * @param {string} method
   * @param {string} route
   * @param {object} payload
   */
  static async request(method: string, route: string, payload: Payload) {
    // REDUX STATE
    const appState = store.getState(); // set store state
    const auth: AuthState = appState.auth;

    // Decrypt
    let accessToken = '';
    if (auth.accessToken !== '') {
      const bytes = CryptoJS.AES.decrypt(auth, "KEY");
      accessToken = bytes.toString(CryptoJS.enc.Utf8) || '';
    }

    if (payload.params) {
      const path = this.resolveParams(payload.params);
      route = route + path;
    }

    // setup base headers
    const baseHeaders = {
      Version: DeviceInfo.getBuildNumber(),
      Platform: Platform.OS,
      Timestamp: `${Date.now()}`,
      Authorization: `Bearer ${accessToken}`,
    };

    const requestConfig: RequestConfig = {
      url: route,
      method,
      headers: payload.headers
        ? {...baseHeaders, ...payload.headers}
        : baseHeaders,
    };

    if (payload.body && !_.isEmpty(payload.body)) {
      const formData = new FormData();
      for (const key in payload.body) {
        formData.append(key, payload.body[key]);
      }
      requestConfig.data = formData;
    }

    try {
      const res = await apiInstance.request(requestConfig);
      await this.resolveResponse(res.data);
      return Promise.resolve(res.data);
    } catch (err) {
      console.log(err);
      this.resolveResponse(err);
      return Promise.reject(err);
    }
  }
}

export default ApiRequest;
