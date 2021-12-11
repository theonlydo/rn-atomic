import actionTypes from './constant';
import {UserState, initialUserState} from './type';

const User = (state: UserState = initialUserState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};

export default User;
