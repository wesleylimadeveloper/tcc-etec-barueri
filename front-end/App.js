import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/screens/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}