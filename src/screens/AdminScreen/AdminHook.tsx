import {useNavigationState} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useAdminSocket} from '../../hooks/useSocket';

export const useAdmin = () => {
  const [Loading, setLoading] = useState(true);

  const {
    state: {token, user},
  } = useContext(AuthContext);
  const index = useNavigationState((state) => state.index);
  console.log(index);
  const {empresa, wsEmpresa} = useAdminSocket();
  console.log(empresa[0].data);
  useEffect(() => {
    const userId = user?._id.toString();
    if (index === 0 && userId) {
      wsEmpresa(userId);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return {Loading, empresa, token};
};
