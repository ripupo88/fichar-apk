import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../../context/AuthContext';
import {Api} from '../../ports/api/api';

export const FicharHook = () => {
  const {
    state: {user, token},
    loginByToken,
  } = useContext(AuthContext);
  const navigator = useNavigation();
  const trabajando = user?.trabajando;
  const horaEntrada = user?.horaEntrada;
  const myDate = new Date(horaEntrada || 0);

  const [camara, setCamara] = useState<'front' | 'back'>('back');
  const now = new Date();
  const [time, setTime] = useState(
    horaEntrada ? new Date(now.getTime() - myDate.getTime()) : new Date(0),
  );
  const {top} = useSafeAreaInsets();

  useInterval(() => {
    if (trabajando) {
      setTime((tim) => new Date(tim.getTime() + 1000));
    }
  }, 1000);

  const handleRead = async (e: any) => {
    const api = new Api();
    const res = await api.Fichar(token, trabajando || false, e.data);
    if (typeof res !== 'string') {
      loginByToken();
    }
    navigator.goBack();
  };
  return {
    camara,
    time,
    top,
    navigator,
    setCamara,
    handleRead,
  };
};

function useInterval(callback: Function, delay: any) {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}
