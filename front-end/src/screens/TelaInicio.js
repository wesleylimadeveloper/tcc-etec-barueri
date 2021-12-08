import React from 'react'
import {
    Image, 
    StatusBar, 
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'

import Logo from '../components/Logo'
import globalStyles from '../styles/globalStyles'

export default ({ navigation, route }) => {
    const usuario = route.params

    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" 
            />
            <TouchableOpacity onPress={() => navigation.navigate("TelaPerfil", usuario)}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoSaudacao}>Olá, {usuario.nome_cliente}!</Text>
                </View>
            </TouchableOpacity>
            <Logo />
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("TelaEstabelecimentos", usuario)}>
                <Icon color='#FFF' name="shopping-store" size={36} type="fontisto" />
                <Text style={styles.texto}>Estabelecimentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("TelaCategorias", usuario)}>
                <Icon color="#FFF" name="filter" size={36} type="font-awesome" />
                <Text style={styles.texto}>Categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("TelaPedidos", usuario)}>
                <Icon color="#FFF" name="tasks" size={36} type="font-awesome" />
                <Text style={styles.texto}>Meus Pedidos</Text>
            </TouchableOpacity>
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
    tituloContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    iconePerfilContainer: {
        alignItems: 'center',
        backgroundColor: globalStyles.corSecundaria,
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        marginRight: 10,
        width: 60,
    },
    fotoPerfil: {
        borderRadius: 30,
        height: 60,
        marginRight: 10,
        width: 60,
    },
    textoSaudacao: {
        color: globalStyles.corSecundaria,
        fontSize: 26,
        fontWeight: 'bold'
    },
    botao: {
        alignItems: 'center',
        backgroundColor: globalStyles.corSecundaria,
        borderRadius: 5,
        marginBottom: 10,
        paddingVertical: 10,
        width: '80%'
    },
    texto: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    }
})