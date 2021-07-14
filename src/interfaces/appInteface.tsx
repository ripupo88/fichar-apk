export interface LoginForm {
  isAdmin: boolean;
  password: string;
  password2: string;
  user: string;
  code: string;
}

export interface UserData {
  _id: string;
  alias?: string;
  username: string;
  editable: boolean;
  horaEntrada?: string;
  trabajando?: boolean;
  empresas?: string[];
  role?: 'ADMIN' | 'USER';
  fullName?: string;
  nif?: string;
  activo?: boolean;
  trabajaPara?: string;
}

export interface loginRes {
  accesToken: string;
  user: UserData;
}
export interface GetEmpresa {
  alias: string;
  name: string;
  cif: string;
  data: UserData[];
}
