import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipalUsuario from '../screens/TelaPrincipalUsuario';
import TelaEstabelecimento from '../screens/TelaEstabelecimento';
import CommonStyles from '../CommonStyles';

export default () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
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
            }}>
            <Stack.Screen 
                component={TelaPrincipalUsuario}
                name="TelaPrincipalUsuario"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={TelaEstabelecimento}
                name="TelaEstabelecimento"
                options={{
                    headerShown: false,
                }}
            />            
        </Stack.Navigator>
    )
}