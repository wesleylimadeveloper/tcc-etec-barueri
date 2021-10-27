import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import TelaBemVindo from '../screens/TelaBemVindo'
import TelaLogin from '../screens/TelaLogin'
import TelaCadastroCliente from '../screens/TelaCadastroCliente'
import globalStyles from '../styles/globalStyles'

export default () => {
    const Stack = createNativeStackNavigator()
    const { Navigator, Screen } = Stack

    return (
        <Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
                headerTitleStyle: {
                    fontSize: 26,
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: globalStyles.corPrincipal,
                },
                headerShown: true,
                headerTintColor: globalStyles.corSecundaria,
        }}>
            <Screen component={SplashScreen} name="SplashScreen" options={{ headerShown: false }} />
            <Screen component={TelaBemVindo} name="TelaBemVindo" options={{ headerShown: false }} />
            <Screen component={TelaLogin} name="TelaLogin" options={{ headerShown: false }} />
            <Screen component={TelaCadastroCliente} name="TelaCadastroCliente" options={{ headerTitle: "Cadastro de Cliente"}} />
        </Navigator>
    )
}