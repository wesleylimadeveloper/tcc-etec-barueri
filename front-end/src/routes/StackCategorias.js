import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaCategorias from '../screens/TelaCategorias'
import TelaFiltroCategorias from '../screens/TelaFiltroCategorias'
import TelaEstabelecimento from '../screens/TelaEstabelecimento'
import globalStyles from '../styles/globalStyles'

export default () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: globalStyles.corSecundaria,
                },
                headerTintColor: globalStyles.corPrincipal,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 26,
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen 
                component={TelaCategorias}
                name="TelaCategorias"
            />
            <Stack.Screen 
                component={TelaFiltroCategorias}
                name="TelaFiltroCategorias"
                options={{
                    headerShown: true,
                    headerTitle: 'Categoria'
                }}
            /> 
            <Stack.Screen 
                component={TelaEstabelecimento}
                name="TelaEstabelecimento"
                options={{
                    headerShown: true,
                    headerTitle: 'Estabelecimento'
                }}
            />            
        </Stack.Navigator>
    )
}