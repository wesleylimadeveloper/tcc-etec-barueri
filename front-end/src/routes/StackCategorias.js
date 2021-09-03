import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaCategorias from '../screens/TelaCategorias'
import TelaFiltroCategorias from '../screens/TelaFiltroCategorias'
import CommonStyles from '../CommonStyles'

export default () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: CommonStyles.corPrincipal,
                },
                headerTintColor: CommonStyles.corSecundaria,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 28,
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
            />            
        </Stack.Navigator>
    )
}