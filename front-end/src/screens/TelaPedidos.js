import React, { useEffect, useState } from 'react'
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'

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

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" 
            />
            <FlatList 
                data={pedidos}
                keyExtractor={item => item.id_agenda.toString()}
                renderItem={({item}) => {
                    return (
                        <View>
                            <View style={styles.infoPedidos}>
                                <Text style={styles.nomeFantasia}>{item.nome_fantasia}</Text>
                                <Text>Telefone: {item.telefone_estabelecimento}</Text>
                                <Text>{item.data_agenda}</Text>
                                <Text style={styles.nomeFantasia}>{item.status_agenda}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
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
    nomeFantasia: {
        color: globalStyles.corSecundaria,
        fontSize: 20,
        fontWeight: 'bold',
    }
})