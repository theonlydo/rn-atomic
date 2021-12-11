import actionTypes from './constant';
import {AuthState, initialAuthState} from './type';

const Auth = (state: AuthState = initialAuthState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.value,
      };
    case actionTypes.SET_FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.value,
      };
    case actionTypes.REMOVE_ALL_AUTH:
      return initialAuthState;
    default:
      return state;
  }
};

export default Auth;
