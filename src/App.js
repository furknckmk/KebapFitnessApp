/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Pages/WelcomeScreen';
import MemberSign from './Pages/MemberSign';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


