import React from 'react'
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import BotaoPrincipal from '../components/BotaoPrincipal'
import CommonStyles from '../CommonStyles'

export default (props) => {
    const { nome_fantasia, fotos_lugar } = props.route.params

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.nomeFantasiaContainer}>
                <Text style={styles.text}>{nome_fantasia}</Text>
            </View>
            <View style={styles.imagemContainer}>
                <Image style={styles.imagemEstabelecimento} 
                    source={{ uri: `${fotos_lugar}` }} 
                />
            </View>
            <Text style={styles.textoServiços}>Serviços</Text>
            <BotaoPrincipal title="Agendar" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
    },
    nomeFantasiaContainer: {
        alignItems: 'center',
        width: '85%',
    },
    text: {
        color: CommonStyles.corSecundaria,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 50,
        textAlign: 'center',
    },
    imagemContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 10,
        marginBottom: 10,
        padding: 5,
    },
    imagemEstabelecimento: {
        height: 218,
        width: 330,
    },
    textoServiços: {
        color: CommonStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    }
})