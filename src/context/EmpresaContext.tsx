import React, {createContext, useState} from 'react';
import {useAdminSocket} from '../hooks/useSocket';
import {GetEmpresa} from '../interfaces/appInteface';

export interface EmpresaContextProps {
  empresas: GetEmpresa[];
}

export const EmpresaContext = createContext({} as EmpresaContextProps);

export const AuthProvider = ({children}: any) => {
  const {empresa, wsEmpresa} = useAdminSocket();
  const [empresas, setEmpresas] = useState<GetEmpresa[]>(empresa);

  const update = () => {
    setEmpresas(empresa);
  };

  <EmpresaContext.Provider value={{empresaState}}>
    {children}
  </EmpresaContext.Provider>;
};
