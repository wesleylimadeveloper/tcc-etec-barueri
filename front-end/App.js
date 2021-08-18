import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackPrincipal from './src/routes/StackPrincipal';

export default function App() {
  return (
    <NavigationContainer>
      <StackPrincipal />
    </NavigationContainer>
  );
}