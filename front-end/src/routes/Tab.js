import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import StackInicio from './StackInicio'
import StackCategorias from './StackCategorias'
import TelaEnderecos from '../screens/TelaEnderecos'
import TelaPerfil from '../screens/TelaPerfil'
import globalStyles from '../styles/globalStyles'

export default () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 28,
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    backgroundColor: globalStyles.corSecundaria,
                    borderTopColor: 'transparent',
                    paddingVertical: 5,
                },
                tabBarActiveTintColor: '#FFF',
                tabBarLabelStyle: {
                    fontSize: 13,
                },
            }}>
            <Tab.Screen
                component={StackInicio}
                name="StackInicio"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="home" size={25} type="font-awesome" />
                    )
                }}
            />
            <Tab.Screen
                component={StackCategorias}
                name="StackCategorias"
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="search" size={25} type="font-awesome" />
                    )
                }}
            />
            <Tab.Screen
                component={TelaEnderecos}
                name="TelaEnderecos"
                options={{
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