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
import { Icon } from 'react-native-elements/dist/icons/Icon'

import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ route }) => {
    const [pedidos, setPedidos] = useState('')
    const [loading, setLoading] = useState(true)
    const { id_cliente } = route.params

    useEffect(() => {
        async function getPedidos() {
            try {
                const { data } = await api.get(`/agendas/${id_cliente}`)
                setPedidos(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getPedidos()
    }, [])

    async function excluirPedido() {
        try {
            await api.delete(`/agendas/${id_agenda}`)
        } catch (error) {
            console.log(error)
        }
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
                <View style={styles.pedidos}>
                    <FlatList
                        data={pedidos}
                        keyExtractor={item => item.id_agenda.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View style={styles.infoPedidos}>
                                        <View style={styles.nomeFantasiaContainer}>
                                            <Text style={styles.nomeFantasia}>{item.nome_fantasia}</Text>
                                        </View>
                                        <Image style={styles.fotoEstabelecimento} source={{ uri: `${item.foto_estabelecimento}` }} />
                                        <Text style={styles.texto}>Telefone: {item.telefone_estabelecimento}</Text>
                                        <Text style={styles.texto}>Data: {item.data_agenda}</Text>
                                        <Text style={styles.nomeFantasia}>{item.status_agenda}</Text>
                                        <View style={styles.iconsContainer}>
                                            <TouchableOpacity>
                                                <Icon color={globalStyles.corSecundaria} name="edit" size={24} type="font-awesome" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={excluirPedido}>
                                                <Icon color="red" name="trash" size={24} type="font-awesome" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
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
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    pedidos: {
        marginTop: 10
    },
    infoPedidos: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginVertical: 7,
        padding: 10,
        width: '80%',
    },
    nomeFantasiaContainer: {
        width: '80%'
    },
    nomeFantasia: {
        color: globalStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    fotoEstabelecimento: {
        borderRadius: 5,
        height: 169,
        marginVertical: 5,
        width: 300,
    },
    texto: {
        color: globalStyles.corSecundaria,
        fontSize: 16,
        fontWeight: 'bold'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: '50%'
    }
})