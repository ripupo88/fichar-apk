import {useNavigationState} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {Api} from '../../ports/api/api';
import {AuthContext} from '../../context/AuthContext';
import {GetEmpresa} from '../../interfaces/appInteface';

export const useAdmin = () => {
  const [Loading, setLoading] = useState(true);
  const [apidata, setData] = useState<GetEmpresa[]>([
    {
      alias: '',
      name: '',
      cif: '',
      code: '',
      QRurl: '',
      data: [],
    },
  ]);
  const {
    state: {token},
  } = useContext(AuthContext);
  const index = useNavigationState((state) => state.index);

  useEffect(() => {
    if (index === 0) {
      getRes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const api = new Api();

  const getRes = async () => {
    console.log('llama');
    const res: GetEmpresa[] = await api.GetEmpresa(token);
    setData(res);
    setLoading(false);
  };
  return {Loading, apidata, token};
};
