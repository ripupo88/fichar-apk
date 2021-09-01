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
  wsSetUser: (
    userData: Notif,
    userId: string,
    _id: string,
    cancell?: boolean,
  ) => void;
  wsEmpresa: (user: string, abort?: boolean) => void;
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

  const wsSetUser = (
    userData: Notif,
    userId: string,
    _id: string,
    cancell?: boolean,
  ) => {
    if (!cancell) {
      mySocket.emit('user', {...userData, userId, admin: _id});
    }
  };

  const wsEmpresa = (user: string, abort?: boolean) => {
    if (abort) {
      console.log(mySocket.off('empresa'));
    } else {
      mySocket.emit('empresa', {user});
      mySocket.on('empresa', (inf) => {
        setEmpresas(inf);
      });
    }
  };

  return (
    <EmpresaContext.Provider value={{empresas, wsSetUser, wsEmpresa}}>
      {children}
    </EmpresaContext.Provider>
  );
};
