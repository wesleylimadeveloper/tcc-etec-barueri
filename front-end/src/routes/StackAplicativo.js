import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import TelaBemVindo from '../screens/TelaBemVindo'
import TelaLogin from '../screens/TelaLogin'
import TelaCadastro from '../screens/TelaCadastro'
import TelaInicio from '../screens/TelaInicio'
import TelaEstabelecimentos from '../screens/TelaEstabelecimentos'
import TelaServicos from '../screens/TelaServicos'
import TelaAgendamento from '../screens/TelaAgendamento'
import TelaCategorias from '../screens/TelaCategorias'
import TelaFiltroCategorias from '../screens/TelaFiltroCategorias'
import TelaPedidos from '../screens/TelaPedidos'
import TelaPerfil from '../screens/TelaPerfil'
import TelaEditarPerfil from '../screens/TelaEditarPerfil'

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
                headerTintColor: '#FFF',
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
                component={TelaInicio} 
                name="TelaInicio" 
                options={{ headerShown: false }} 
            />
            <Screen 
                component={TelaEstabelecimentos} 
                name="TelaEstabelecimentos" 
                options={{ headerTitle: "Estabelecimentos" }} 
            />
            <Screen 
                component={TelaServicos} 
                name="TelaServicos" 
                options={{ headerTitle: "Serviços" }} 
            />
            <Screen 
                component={TelaAgendamento} 
                name="TelaAgendamento" 
                options={{ headerTitle: "Agendamento" }} 
            />
            <Screen 
                component={TelaCategorias} 
                name="TelaCategorias" 
                options={{ headerTitle: "Categorias" }} 
            />
            <Screen 
                component={TelaFiltroCategorias} 
                name="TelaFiltroCategorias" 
                options={{ headerTitle: "Categoria" }} 
            />
            <Screen 
                component={TelaPedidos} 
                name="TelaPedidos" 
                options={{ headerTitle: "Meus Pedidos" }} 
            />
            <Screen 
                component={TelaPerfil} 
                name="TelaPerfil" 
                options={{ headerTitle: "Perfil" }} 
            />
            <Screen 
                component={TelaEditarPerfil} 
                name="TelaEditarPerfil" 
                options={{ headerTitle: "Editar Perfil" }} 
            />
        </Navigator>
    )
}