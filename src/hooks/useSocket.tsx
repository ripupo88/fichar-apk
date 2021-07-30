import {useState} from 'react';
import {Sock} from '../Socket/socket';

export const useSocket = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);
  const mySocket = Sock.getSocket();

  const onChange = (value: any, field: keyof T) => {
    mySocket.emit('message', {asd: 'as'});
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
  };
};
