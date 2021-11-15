import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import TelaBemVindo from '../screens/TelaBemVindo'
import TelaLogin from '../screens/TelaLogin'
import TelaCadastro from '../screens/TelaCadastro'
import Tab from './Tab'

import globalStyles from '../styles/globalStyles'

export default () => {
    
    const Stack = createNativeStackNavigator()
    const { Navigator, Screen } = Stack

    return (
        <Navigator
            initialRouteName="TelaLogin"
            screenOptions={{
                headerTitleStyle: {
                    fontSize: 26,
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: globalStyles.corSecundaria,
                },
                headerShown: true,
                headerTintColor: globalStyles.corPrincipal,
        }}>
            <Screen 
                component={SplashScreen} 
                name="SplashScreen" 
                options={{ headerShown: false }} 
            />
            <Screen 
                component={TelaBemVindo} 
                name="TelaBemVindo" 
                options={{ headerShown: false }} 
            />
            <Screen 
                component={TelaLogin} 
                name="TelaLogin" 
                options={{ headerShown: false }} 
            />
            <Screen 
                component={TelaCadastro} 
                name="TelaCadastro" 
                options={{ headerTitle: "Cadastro"}} 
            />
            <Screen 
                component={Tab} 
                name="Tab" 
                options={{ headerShown: false }} 
            />
        </Navigator>
    )
}