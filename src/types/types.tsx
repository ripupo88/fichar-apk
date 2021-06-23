export type TokenDecoded = {
  exp: Number;
  iat: Number;
  role: 'ADMIN' | 'USER';
  username: String;
};
