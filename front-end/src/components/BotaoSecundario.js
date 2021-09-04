import React from 'react'
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity 
} from 'react-native'
import globalStyles from '../styles/globalStyles'

export default ({ onPress, title }) => {
    return(
        <TouchableOpacity style={styles.botao} onPress={onPress} >
            <Text style={styles.textoBotao}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: globalStyles.corTerciaria,
        borderRadius: 5,
        paddingVertical: 10,
        width: 300,
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})