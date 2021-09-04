import React from 'react'
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native'
import { Icon } from 'react-native-elements'
import globalStyles from '../styles/globalStyles'

export default () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.pedidosContainer}>
                <Text style={styles.texto}>Abertos</Text>
                <Icon color="orange" name="loading1" size={36} type="antdesign" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.pedidosContainer}>
                <Text style={styles.texto}>Finalizados</Text>
                <Icon color="green" name="check-circle" size={40} type="font-awesome" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'space-evenly',
    },
    pedidosContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 200,
        justifyContent: 'center',
        width: '85%'
    },
    texto: {
        color: globalStyles.corSecundaria,
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
    },
})