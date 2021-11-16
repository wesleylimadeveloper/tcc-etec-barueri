import React from 'react'
import { 
    StatusBar, 
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'

import Titulo from '../components/Titulo'
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
            <View style={styles.tituloContainer}>
                <Titulo>Seja bem-vindo(a) {usuario.nome_cliente}!</Titulo>
            </View>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("TelaEstabelecimentos", usuario)}>
                <Icon color='#FFF' name="shopping-store" size={36} type="fontisto" />
                <Text style={styles.texto}>Estabelecimentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("TelaCategorias", usuario)}>
                <Icon color="#FFF" name="filter" size={36} type="font-awesome" />
                <Text style={styles.texto}>Categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Icon color="#FFF" name="tasks" size={36} type="font-awesome" />
                <Text style={styles.texto}>Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("TelaPerfil", usuario)}>
                <Icon color="#FFF" name="user-circle" size={36} type="font-awesome" />
                <Text style={styles.texto}>Perfil</Text>
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
        marginTop: 10,
    },
    logoContainer: {
        marginVertical: -13,
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