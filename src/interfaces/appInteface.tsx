export interface LoginForm {
  isAdmin: boolean;
  password: string;
  password2: string;
  user: string;
  code: string;
}

export interface UserData {
  _id: string;
  username: string;
  editable: boolean;
  empresas: string[];
  role: 'ADMIN' | 'USER';
}

export interface loginRes {
  accesToken: string;
  user: UserData;
}
