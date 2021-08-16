import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaCadastro from './TelaCadastro';
import TelaCadastroUsuario from './TelaCadastroUsuario';
import TelaCadastroEndereco from './TelaCadastroEndereco';
import TelaCadastroCliente from './TelaCadastroCliente';
import TelaCadastroFornecedor from './TelaCadastroFornecedor';
import TelaPrincipalUsuario from './TelaPrincipalUsuario';
import TelaCategoria from './TelaCategoria';
import TelaFavoritos from './TelaFavoritos';
import TelaPerfilUsuario from './TelaPerfilUsuario';
import CommonStyles from '../CommonStyles';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function Tabs() {
        return (
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: CommonStyles.corPrincipal,
                    },
                    headerTintColor: CommonStyles.corSecundaria,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 28,
                        fontWeight: 'bold',
                    },
                    tabBarStyle: {
                        backgroundColor: CommonStyles.corSecundaria,
                        borderTopColor: CommonStyles.corTerciaria,
                        padding: 5,
                    },
                    tabBarActiveTintColor: '#FFF',
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                }}>
                <Tab.Screen
                    component={TelaPrincipalUsuario}
                    name="TelaPrincipalUsuario"
                    options={{
                        headerShown: false,
                        title: 'Inicio',
                        tabBarIcon: ({ color }) => (
                            <Icon color={color} name="home" size={25} type="font-awesome" />
                        )
                    }}
                />
                <Tab.Screen
                    component={TelaCategoria}
                    name="TelaCategoria"
                    options={{
                        title: 'Categoria',
                        tabBarIcon: ({ color }) => (
                            <Icon color={color} name="search" size={25} type="font-awesome" />
                        )
                    }}
                />
                <Tab.Screen
                    component={TelaFavoritos}
                    name="TelaFavoritos"
                    options={{
                        title: 'Favoritos',
                        tabBarIcon: ({ color }) => (
                            <Icon color={color} name="heart" size={25} type="font-awesome" />
                        )
                    }}
                />
                <Tab.Screen
                    component={TelaPerfilUsuario}
                    name="TelaPerfilUsuario"
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ color }) => (
                            <Icon color={color} name="user" size={25} type="font-awesome" />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }

    return (
        <Stack.Navigator
            initialRouteName="Tabs">
            <Stack.Screen
                component={TelaCadastro}
                name="TelaCadastro"
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
                component={Tabs}
                name="Tabs"
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}