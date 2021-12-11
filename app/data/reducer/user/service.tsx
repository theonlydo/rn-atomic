import API from '@app/services/api';

export const postLogin = () => async dispatch => {
  try {
    const res = await API.reqLogin({});

    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve(err);
  }
};
