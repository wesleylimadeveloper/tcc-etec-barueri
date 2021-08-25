import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import TelaPrincipalUsuario from '../screens/TelaPrincipalUsuario';
import TelaCategorias from '../screens/TelaCategorias';
import TelaFavoritos from '../screens/TelaFavoritos';
import TelaEnderecos from '../screens/TelaEnderecos';
import TelaPerfil from '../screens/TelaPerfil';
import CommonStyles from '../CommonStyles';

export default () => {
    const Tab = createBottomTabNavigator();

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
                    borderTopColor: 'transparent',
                    padding: 5,
                },
                tabBarActiveTintColor: '#FFF',
                tabBarLabelStyle: {
                    fontSize: 13,
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
                component={TelaCategorias}
                name="TelaCategorias"
                options={{
                    title: 'Categorias',
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
                component={TelaEnderecos}
                name="TelaEnderecos"
                options={{
                    headerShown: false,
                    title: 'Endereços',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="map-marker" size={25} type="font-awesome" />
                    )
                }}
            />
            <Tab.Screen
                component={TelaPerfil}
                name="TelaPerfil"
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