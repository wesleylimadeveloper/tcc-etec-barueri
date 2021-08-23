import React from 'react';
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import SearchBar from '../components/SearchBar';
import categorias from '../data/Categorias';
import CommonStyles from '../CommonStyles';

export default () => {

    function renderItem({ item }) {
        return (
            <View style={styles.categoriaContainer}>
                <Image style={styles.imagemCategoria} source={{ uri: `${item.imagemCategoria}` }} />
                <TouchableOpacity>
                    <Text style={styles.textoCategoria}>{item.nomeCategoria}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.searchBarContainer}>
                <SearchBar
                    placeholder="Buscar..."
                />
            </View>
            <FlatList
                data={categorias}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    searchBarContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    categoriaContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        width: '80%',
    },
    imagemCategoria: {
        borderRadius: 75,
        height: 150,
        marginBottom: 5,
        width: 150,
    },
    textoCategoria: {
        color: CommonStyles.corSecundaria,
        fontSize: 22,
        fontWeight: 'bold',
    },
});