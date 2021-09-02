import React, { useEffect, useState } from 'react'
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import SearchBar from '../components/SearchBar'
import api from '../api/Api'
import CommonStyles from '../CommonStyles'

export default () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        api.get('/categorias')
            .then(response => setCategorias(response.data))
            .catch(error => console.log(error))
    }, [])

    function renderItem({ item }) {
        return (
            <View style={styles.categoriaContainer}>
                <Image style={styles.foto} source={{ uri: `${item.foto}` }} />
                <TouchableOpacity>
                    <Text style={styles.nome}>{item.nome_categoria}</Text>
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
                keyExtractor={item => item.cod_categoria.toString()}
                renderItem={renderItem}
            />
        </View>
    )
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
    foto: {
        height: 150,
        marginBottom: 10,
        width: 150,
    },
    nome: {
        color: CommonStyles.corSecundaria,
        fontSize: 23,
        fontWeight: 'bold',
    },
})