import React from 'react'
import {
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

import BotaoPrincipal from '../components/BotaoPrincipal'
import BotaoSecundario from '../components/BotaoSecundario'
import globalStyles from '../styles/globalStyles'

export default ({ navigation, route }) => {
    const { nome_cliente, sobrenome_cliente, email_cliente, telefone_cliente, sexo_cliente } = route.params
    const usuario = route.params

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
            <View style={styles.botoesContainer}>
                <BotaoPrincipal onPress={() => navigation.navigate("TelaEditarPerfil", usuario)} title="Editar" />
                <BotaoSecundario onPress={() => navigation.navigate("TelaLogin")} title="Sair" />
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
        height: '35%',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        width: '70%'
    },
    iconePerfilContainer: {
        alignItems: 'center',
        backgroundColor: globalStyles.corSecundaria,
        borderRadius: 75,
        height: 150,
        justifyContent: 'center',
        width: 150
    },
    fotoPerfil: {
        borderRadius: 75,
        height: 150,
        width: 150
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
    },
    botoesContainer: {
        height: 90,
        justifyContent: 'space-between',
    }
})