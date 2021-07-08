import {UserData} from '../interfaces/appInteface';
import {AuthState} from './AuthContext';

type Action =
  | {type: 'LogIn'; payload: {user: UserData; token: string}}
  | {type: 'LogOut'; payload?: any}
  | {type: 'Error'; payload: string}
  | {type: 'NoToken'; payload?: any}
  | {type: 'NotifToken'; payload: string};

export default (state: AuthState, {type, payload}: Action): AuthState => {
  switch (type) {
    case 'LogIn':
      return {
        ...state,
        loading: false,
        isLoggedin: true,
        error: '',
        user: payload.user,
        token: payload.token,
      };
    case 'Error':
      return {
        ...state,
        loading: false,
        isLoggedin: false,
        user: undefined,
        error: payload,
        token: '',
      };
    case 'NoToken':
      return {
        ...state,
        loading: false,
        isLoggedin: false,
        user: undefined,
        error: '',
        token: '',
      };
    case 'LogOut':
      return {
        ...state,
        loading: false,
        isLoggedin: false,
        user: undefined,
        token: '',
      };

    default:
      return state;
  }
};
