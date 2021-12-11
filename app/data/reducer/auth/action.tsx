import actionTypes from './constant';

export const setAccessToken = (value: string) => ({
  type: actionTypes.SET_ACCESS_TOKEN,
  value,
});

export const setFcmToken = (value: string) => ({
  type: actionTypes.SET_FCM_TOKEN,
  value,
});
