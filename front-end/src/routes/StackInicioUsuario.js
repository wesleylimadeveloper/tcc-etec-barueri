import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaInicioUsuario from '../screens/TelaInicioUsuario'
import TelaEstabelecimento from '../screens/TelaEstabelecimento'
import globalStyles from '../styles/globalStyles'

export default () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: globalStyles.corPrincipal,
                },
                headerTintColor: globalStyles.corSecundaria,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 28,
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen 
                component={TelaInicioUsuario}
                name="TelaInicioUsuario"
            />
            <Stack.Screen 
                component={TelaEstabelecimento}
                name="TelaEstabelecimento"
            />            
        </Stack.Navigator>
    )
}