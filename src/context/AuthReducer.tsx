import {UserData} from '../interfaces/appInteface';
import {AuthState} from './AuthContext';

type Action =
  | {type: 'LogIn'; payload: UserData}
  | {type: 'LogOut'; payload?: any}
  | {type: 'Error'; payload: string};

export default (state: AuthState, {type, payload}: Action): AuthState => {
  switch (type) {
    case 'LogIn':
      return {...state, isLoggedin: true, error: '', user: payload};
    case 'Error':
      return {...state, isLoggedin: false, user: undefined, error: payload};
    case 'LogOut':
      return {...state, isLoggedin: false, user: undefined};

    default:
      return state;
  }
};
