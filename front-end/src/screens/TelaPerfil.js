import React from 'react'
import {
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ route }) => {
    const { nome_cliente, sobrenome_cliente, email_cliente, telefone_cliente, sexo_cliente } = route.params

    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" 
            />
            <View style={styles.infoContainer}>
                <Text style={styles.nome}>{nome_cliente} {sobrenome_cliente}</Text>
                <Text style={styles.textoInfo}>E-mail: <Text style={styles.texto}>{email_cliente}</Text> </Text>
                <Text style={styles.textoInfo}>Telefone: <Text style={styles.texto}>{telefone_cliente}</Text> </Text>
                <Text style={styles.textoInfo}>Sexo: <Text style={styles.texto}>{sexo_cliente}</Text> </Text>
            </View>
            <View>
                <BotaoPrincipal title="Editar" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
    },
    titulo: {
        marginBottom: 50,
        marginTop: 20,
    },
    infoContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: '30%',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        width: '70%'
    },
    nome: {
        color: globalStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
    },
    textoInfo: {
        color: globalStyles.corSecundaria,
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
        fontWeight: 'normal'
    }
})