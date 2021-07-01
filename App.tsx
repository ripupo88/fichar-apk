import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import {MainNavegation} from './src/navigator/MainNavegation';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MainNavegation />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
