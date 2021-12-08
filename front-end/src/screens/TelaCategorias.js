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
import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ navigation, route }) => {
    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(true)
    const usuario = route.params

    console.log(usuario)

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
                <TouchableOpacity onPress={() => navigation.navigate("TelaFiltroCategorias", [item, usuario])}>
                    <Text style={styles.nome}>{item.nome_categoria}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" 
            />
            {loading
                ?
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={globalStyles.corSecundaria} />
                </View>
                :
                <View style={styles.lista}>
                    <FlatList
                    data={categorias}
                    keyExtractor={item => item.id_categoria.toString()}
                    renderItem={renderItem}
                    />
                </View>
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
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    lista: {
        marginTop: 20,
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