import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { Divider } from 'react-native-elements'
import Titulo from '../components/Titulo'
import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ route, navigation }) => {
    const [servicos, setServicos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id_categoria, nome_categoria } = route.params[0]
    const usuario = route.params[1]

    useEffect(() => {
        async function getCategorias() {
            try {
                const { data } = await api.get(`/servicos/categoria/${id_categoria}`)
                setServicos(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getCategorias()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.titulo}>
                <Titulo>
                    <Text>{nome_categoria}</Text>
                </Titulo>
            </View>
            {loading
                ?
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={globalStyles.corSecundaria} />
                </View>
                :
                <>
                    <FlatList
                        data={servicos}
                        keyExtractor={item => item.id_servico.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.servicoContainer}>
                                    <Image style={styles.fotoLugar} source={{ uri: `${item.foto_estabelecimento}` }} />
                                    <TouchableOpacity style={styles.nomeFantasiaContainer}
                                        onPress={() => navigation.navigate("TelaServicos", [item, usuario])}>
                                        <Text style={styles.nomeFantasia}>{item.nome_fantasia}</Text>
                                        <Divider />
                                    </TouchableOpacity>
                                    <View style={styles.servicoInfoContainer}>
                                        <Text style={styles.textoInfoServico}>{item.nome_servico}</Text>
                                        <Text style={styles.textoInfoServico}>R$ {item.valor_servico.toString().replace(".", ",")}</Text>
                                    </View>
                                </View>
                            )
                        }}
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
        marginBottom: 15,
        marginTop: 10,
    },
    loading: {
        flex: 1,
        justifyContent: 'center'
    },
    fotoLugar: {
        height: 218,
        width: 330,
    },
    nomeFantasiaContainer: {
        marginBottom: 5,
        width: '80%'
    },
    nomeFantasia: {
        color: globalStyles.corSecundaria,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    servicoContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        paddingVertical: 5,
        width: '85%'
    },
    servicoInfoContainer: {
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    textoInfoServico: {
        color: globalStyles.corSecundaria,
        fontSize: 16,
        fontWeight: 'bold',
    },
})