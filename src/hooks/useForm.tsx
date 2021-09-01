import {useCallback, useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = useCallback(
    (value: any, field: keyof T) => {
      setState({
        ...state,
        [field]: value,
      });
    },
    [state],
  );

  return {
    ...state,
    form: state,
    onChange,
  };
};
