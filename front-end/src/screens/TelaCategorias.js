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
import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
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
                <TouchableOpacity onPress={() => navigation.navigate("TelaFiltroCategorias", item)}>
                    <Text style={styles.nome}>{item.nome_categoria}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <Text style={styles.titulo}>Categorias</Text>
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
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        color: globalStyles.corSecundaria,
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
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
        borderRadius: 75,
        height: 150,
        marginBottom: 10,
        width: 150,
    },
    nome: {
        color: globalStyles.corSecundaria,
        fontSize: 23,
        fontWeight: 'bold',
    },
})