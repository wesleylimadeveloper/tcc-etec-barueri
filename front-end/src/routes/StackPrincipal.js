import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../screens/TelaLogin';
import TelaCadastro from '../screens/TelaCadastro';
import TelaCadastroUsuario from '../screens/TelaCadastroUsuario';
import TelaCadastroFornecedor from '../screens/TelaCadastroFornecedor';
import TelaCadastroEndereco from '../screens/TelaCadastroEndereco';
import TelaCadastroCliente from '../screens/TelaCadastroCliente';
import TabUsuario from './TabUsuario';
import TabFornecedor from './TabFornecedor';

export default () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="TelaCadastro">
            <Stack.Screen
                component={TelaCadastro}
                name="TelaCadastro"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={TelaLogin}
                name="TelaLogin"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={TelaCadastroUsuario}
                name="TelaCadastroUsuario"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={TelaCadastroFornecedor}
                name="TelaCadastroFornecedor"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={TelaCadastroEndereco}
                name="TelaCadastroEndereco"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={TelaCadastroCliente}
                name="TelaCadastroCliente"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={TabUsuario}
                name="TabUsuario"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={TabFornecedor}
                name="TabFornecedor"
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}