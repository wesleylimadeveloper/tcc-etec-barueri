import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaInicio from '../screens/TelaInicio'
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
                headerTitleStyle: {
                    fontSize: 26,
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen 
                component={TelaInicio}
                name="TelaInicio"
            />
            <Stack.Screen 
                component={TelaEstabelecimento}
                name="TelaEstabelecimento"
                options={{
                    headerShown: true,
                    headerTitle: 'Estabelecimento',
                }}
            />            
        </Stack.Navigator>
    )
}