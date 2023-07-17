/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Connexion from './src/page/connexion/connexion';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/page/home/home';
import Messenger from './src/page/messagerie/messenger';
import RegisterForm from './src/page/Auth/RegisterForm';
import LoginForm from './src/page/Auth/LoginForm';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Connexion: undefined;
  Home: undefined;
  Messenger: undefined;
  LoginForm: undefined;
  RegisterForm: undefined;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen
          name="Connexion"
          component={Connexion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Messenger"
          component={Messenger}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterForm"
          component={RegisterForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginForm"
          component={LoginForm}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
