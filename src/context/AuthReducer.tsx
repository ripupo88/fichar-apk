import {UserData} from '../interfaces/appInteface';
import {AuthState} from './AuthContext';

type Action =
  | {type: 'LogIn'; payload: UserData}
  | {type: 'LogOut'; payload?: any}
  | {type: 'Error'; payload: string}
  | {type: 'NoToken'; payload?: any};

export default (state: AuthState, {type, payload}: Action): AuthState => {
  switch (type) {
    case 'LogIn':
      return {
        ...state,
        loading: false,
        isLoggedin: true,
        error: '',
        user: payload,
      };
    case 'Error':
      return {
        ...state,
        loading: false,
        isLoggedin: false,
        user: undefined,
        error: payload,
      };
    case 'NoToken':
      return {
        ...state,
        loading: false,
        isLoggedin: false,
        user: undefined,
        error: '',
      };
    case 'LogOut':
      return {...state, loading: false, isLoggedin: false, user: undefined};

    default:
      return state;
  }
};
