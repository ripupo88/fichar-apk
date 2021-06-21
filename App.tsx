import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import {MenuLateral} from './src/navigator/MenuLateral';
import {LoginScreen} from './src/screens/LoginScreen';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useState} from 'react';
// import {SingInScreen} from './src/screens/SingInScreen';

const App = () => {
  const [token, settoken] = useState<any>('');

  useAsyncStorage('token')
    .getItem()
    .then((res) => settoken(res));

  console.log(token);
  return (
    <NavigationContainer>
      <AppState>
        {/* <SingInScreen /> */}
        {token ? <MenuLateral /> : <LoginScreen token={settoken} />}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
