import {AuthState} from './AuthContext';

type Types = 'LogIn' | 'LogOut';

export default (
  state: AuthState,
  {type, payload}: {type: Types; payload: any},
) => {
  switch (type) {
    case 'LogIn':
      return {...state, ...payload};

    default:
      return state;
  }
};
