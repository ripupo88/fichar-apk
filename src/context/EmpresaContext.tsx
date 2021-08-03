import React, {createContext, useState} from 'react';
import {GetEmpresa} from '../interfaces/appInteface';
import {Sock} from '../Socket/socket';

type Notif = {
  entrada: boolean;
  salida: boolean;
  llegaTarde: boolean;
  salidaTemprano: boolean;
  nuevoDisp: boolean;
};
export interface EmpresaContextProps {
  empresas: GetEmpresa[];
  wsSetUser: (userData: Notif, userId: string, _id: string) => void;
  wsEmpresa: (user: string) => void;
}

export const EmpresaContext = createContext({} as EmpresaContextProps);

export const EmpresaProvider = ({children}: any) => {
  const [empresas, setEmpresas] = useState<GetEmpresa[]>([
    {
      alias: '',
      name: '',
      cif: '',
      code: '',
      QRurl: '',
      data: [],
    },
  ]);

  const mySocket = Sock.getSocket();

  const wsSetUser = (userData: Notif, userId: string, _id: string) => {
    mySocket.emit('user', {...userData, userId, admin: _id});
  };

  const wsEmpresa = (user: string) => {
    mySocket.emit('empresa', {user});
    mySocket.on('empresa', (inf) => {
      setEmpresas(inf);
    });
  };

  return (
    <EmpresaContext.Provider value={{empresas, wsSetUser, wsEmpresa}}>
      {children}
    </EmpresaContext.Provider>
  );
};
