export type TokenDecoded = {
  exp: Number;
  iat: Number;
  role: 'ADMIN' | 'USER';
  username: String;
  devise: {
    id: string;
    marca: string;
    modelo: string;
  };
};

export type CreaEmpresa = {
  exp: Number;
  iat: Number;
  role: 'ADMIN' | 'USER';
  username: String;
};
