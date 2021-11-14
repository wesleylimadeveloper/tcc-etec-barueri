import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import Titulo from '../components/Titulo'
import SearchBar from '../components/SearchBar'
import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCategorias() {
            try {
                const { data } = await api.get('/categorias')
                setCategorias(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getCategorias()
    }, [])

    function renderItem({ item }) {
        return (
            <View style={styles.categoriaContainer}>
                <Image style={styles.foto} source={{ uri: `${item.foto_categoria}` }} />
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
            <View style={styles.titulo}>
                <Titulo>
                    <Text>Categorias</Text>
                </Titulo>
            </View>
            <View style={styles.searchBarContainer}>
                <SearchBar
                    placeholder="Buscar..."
                />
            </View>
            {loading
                ?
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={globalStyles.corSecundaria} />
                </View>
                :
                <>
                    <FlatList
                    data={categorias}
                    keyExtractor={item => item.id_categoria.toString()}
                    renderItem={renderItem}
                    />
                </>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
    },
    titulo: {
        alignItems: 'center',
        marginTop: 20,
    },
    searchBarContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
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