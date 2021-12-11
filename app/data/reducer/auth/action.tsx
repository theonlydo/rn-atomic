/* eslint-disable prefer-promise-reject-errors */
import actionTypes from './constant';

export const setAccessToken = value => ({
  type: actionTypes.SET_ACCESS_TOKEN,
  value
});

export const setFcmToken = value => ({
  type: actionTypes.SET_FCM_TOKEN,
  value
});
