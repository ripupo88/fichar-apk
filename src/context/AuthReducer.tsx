import {AuthState} from './AuthContext';

type Action =
  | {type: 'LogIn'; payload: any}
  | {type: 'LogOut'; payload: any}
  | {type: 'SingUp'; payload: any};

export default (state: AuthState, {type, payload}: Action) => {
  switch (type) {
    case 'LogIn':
      return {...state, ...payload};
    case 'SingUp':
      return {...state, ...payload};

    default:
      return state;
  }
};
