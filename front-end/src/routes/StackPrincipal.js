import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaLogin from '../screens/TelaLogin'
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
                component={TelaCadastro}
                name="TelaCadastro"
            />
            <Stack.Screen
                component={TelaLogin}
                name="TelaLogin"
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