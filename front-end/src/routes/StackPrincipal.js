import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import TelaBemVindo from '../screens/TelaBemVindo'
import TelaEscolhaGeneros from '../screens/TelaEscolhaGeneros'
import TelaLogin from '../screens/TelaLogin'
import TelaRedefinirSenha from '../screens/TelaRedefinirSenha'
import TelaCadastro from '../screens/TelaCadastro'
import TelaCadastroUsuario from '../screens/TelaCadastroUsuario'
import TelaCadastroFornecedor from '../screens/TelaCadastroFornecedor'
import TelaCadastroEndereco from '../screens/TelaCadastroEndereco'
import TelaCadastroCliente from '../screens/TelaCadastroCliente'
import TabUsuario from './TabUsuario'
import TabFornecedor from './TabFornecedor'

export default () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="TabUsuario"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                component={SplashScreen}
                name="SplashScreen"
            />
            <Stack.Screen
                component={TelaBemVindo}
                name="TelaBemVindo"
            />
            <Stack.Screen
                component={TelaEscolhaGeneros}
                name="TelaEscolhaGeneros"
            />
            <Stack.Screen
                component={TelaLogin}
                name="TelaLogin"
            />
            <Stack.Screen
                component={TelaRedefinirSenha}
                name="TelaRedefinirSenha"
            />
            <Stack.Screen
                component={TelaCadastro}
                name="TelaCadastro"
            />
            <Stack.Screen
                component={TelaCadastroUsuario}
                name="TelaCadastroUsuario"
            />
            <Stack.Screen
                component={TelaCadastroFornecedor}
                name="TelaCadastroFornecedor"
            />
            <Stack.Screen
                component={TelaCadastroEndereco}
                name="TelaCadastroEndereco"
            />
            <Stack.Screen
                component={TelaCadastroCliente}
                name="TelaCadastroCliente"
            />
            <Stack.Screen
                component={TabUsuario}
                name="TabUsuario"
            />
            <Stack.Screen
                component={TabFornecedor}
                name="TabFornecedor"
            />
        </Stack.Navigator>
    )
}