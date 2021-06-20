import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
// import {MenuLateral} from './src/navigator/MenuLateral';
import {LoginScreen} from './src/screens/LoginScreen';
// import {SingInScreen} from './src/screens/SingInScreen';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <SingInScreen /> */}
        <LoginScreen />
        {/* <MenuLateral /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
