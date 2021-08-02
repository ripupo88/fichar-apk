import {useFocusEffect} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {EmpresaContext} from '../../context/EmpresaContext';

export const useAdmin = () => {
  const [Loading, setLoading] = useState(true);

  const {
    state: {token, user},
  } = useContext(AuthContext);

  const {empresas: empresa, wsEmpresa} = useContext(EmpresaContext);

  const userId = user?._id.toString();
  useFocusEffect(
    React.useCallback(() => {
      if (userId) {
        wsEmpresa(userId);
        setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return {Loading, empresa, token};
};
