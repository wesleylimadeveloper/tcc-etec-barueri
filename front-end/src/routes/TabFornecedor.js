import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import TelaServicos from '../screens/TelaServicos';
import TelaGerenciarServicos from '../screens/TelaGerenciarServicos';
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
                    fontSize: 14,
                },
            }}>
            <Tab.Screen
                component={TelaServicos}
                name="TelaServicos"
                options={{
                    title: 'Serviços',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="gear" size={25} type="font-awesome" />
                    )
                }}
            />
            <Tab.Screen
                component={TelaGerenciarServicos}
                name="TelaGerenciarServicos"
                options={{
                    title: 'Gerenciar Serviços',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} name="laptop" size={25} type="font-awesome" />
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