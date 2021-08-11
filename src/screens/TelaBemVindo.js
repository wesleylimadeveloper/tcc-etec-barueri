import React from 'react';
import { 
    Image, 
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import BotaoPrincipal from '../components/BotaoPrincipal';
import BotaoSecundario from '../components/BotaoSecundario';
import CommonStyles from '../CommonStyles';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <Text style={styles.titulo}>Bem-vindo(a)!</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
    },
    titulo: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 80,
        textAlign: 'center',
    },
    locationContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    subtitulo: {
        fontSize: 24,
        textAlign: 'center',
    },
    location: {
        marginBottom: 30,
    },
    texto: {
        marginHorizontal: 50,
        textAlign: 'center',
    },
    botoesContainer: {
        height: 100,
        justifyContent: 'space-between'
    }
});