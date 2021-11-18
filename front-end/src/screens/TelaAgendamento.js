import React, { useState } from 'react'
import {
    Image,
    Picker,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ route }) => {    
    console.log(route)

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" 
            />
            <Text>Tela Agendamento</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center'
    },
})