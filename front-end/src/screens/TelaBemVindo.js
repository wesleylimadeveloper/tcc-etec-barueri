import React from 'react'
import { 
    Image, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import Titulo from '../components/Titulo'
import BotaoPrincipal from '../components/BotaoPrincipal'
import BotaoSecundario from '../components/BotaoSecundario'
import globalStyles from '../styles/globalStyles'

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.titulo}>
                <Titulo>
                    <Text>Bem-vindo(a)!</Text>
                </Titulo>
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.subtitulo}>Habilitar serviços de localização</Text>
                <Image style={styles.location}
                    source={require('../assets/location.png')}
                />
                <Text style={styles.texto}>
                    Ative os serviços de localização para que possamos mostrar o que está por perto
                </Text>
            </View>
            <View style={styles.botoesContainer}>
                <BotaoSecundario title="Agora não" />
                <BotaoPrincipal title="Ativar serviços de localização" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
    },
    titulo: {
        marginBottom: 15,
        marginTop: 80,
    },
    locationContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    subtitulo: {
        color: globalStyles.corSecundaria,
        fontSize: 24,
        textAlign: 'center',
    },
    location: {
        marginBottom: 30,
    },
    texto: {
        color: globalStyles.corSecundaria,
        marginHorizontal: 50,
        textAlign: 'center',
    },
    botoesContainer: {
        height: 100,
        justifyContent: 'space-between'
    }
})