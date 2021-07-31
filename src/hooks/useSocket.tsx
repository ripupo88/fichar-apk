import {useState} from 'react';
import {GetEmpresa} from '../interfaces/appInteface';
import {Sock} from '../Socket/socket';

type Notif = {
  entrada: boolean;
  salida: boolean;
  llegaTarde: boolean;
  salidaTemprano: boolean;
  nuevoDisp: boolean;
};

export const useAdminSocket = () => {
  // const [state, setState] = useState(initState);
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

  const wsSetUser = (userData: Notif, userId: string) => {
    mySocket.emit('user', {...userData, userId});
  };

  const wsEmpresa = (user: string) => {
    mySocket.emit('empresa', {user});
    mySocket.on('empresa', (inf) => {
      setEmpresas(inf);
    });
  };

  return {
    empresa: empresas,
    wsEmpresa,
    wsSetUser,
  };
};
