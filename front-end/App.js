import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackAplicativo from './src/routes/StackAplicativo';

export default function App() {
  return (
    <NavigationContainer>
      <StackAplicativo />
    </NavigationContainer>
  );
}