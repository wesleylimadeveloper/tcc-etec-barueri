import React from 'react'
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import estabelecimentos from '../data/Estabelecimentos'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import globalStyles from '../styles/globalStyles'

export default () => {

    function renderItem({ item }) {
        return (
            <View style={styles.favoritoContainer}>
                <Image style={styles.imagemFavoritos} source={{ uri: `${item.imageURL}` }} />
                <View>
                    <TouchableOpacity>
                        <Text style={styles.textoNomeFantasia}>{item.nomeFantasia}</Text>
                        <Text style={styles.textoEndereco}>{item.endereco}, {item.numero}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Icon color="#E63F23" name="heart" size={26} type="font-awesome" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <FlatList
                data={estabelecimentos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    favoritoContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        paddingVertical: 10,
        width: '90%'
    },
    imagemFavoritos: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    textoNomeFantasia: {
        color: globalStyles.corSecundaria,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textoEndereco: {
        alignSelf: 'center',
        color: globalStyles.corSecundaria,
        fontSize: 16,
    }
})