import React, { useEffect, useState } from 'react'
import {
    FlatList,
    StatusBar, 
    StyleSheet, 
    Text,
    View,
} from 'react-native'
import api from '../api/api'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default (props) => {
    const { cod_categoria, nome_categoria } = props.route.params
    const [servicos, setServicos] = useState([])

    useEffect(() => {
        api.get(`/servicos/categoria/${cod_categoria}`)
            .then(response => setServicos(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <Text style={styles.titulo}>{nome_categoria}</Text>
            <FlatList 
                data={servicos}
                keyExtractor={item => item.cod_servicos.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.servicoContainer}>
                            <View style={styles.servicoInfoContainer}>
                                <Text style={styles.textoInfoServico}>{item.nome_servico}</Text>
                                <Text style={styles.textoInfoServico}>R$ {item.valor.toString().replace(".", ",")}</Text>
                            </View>
                            <BotaoPrincipal title="Estabelecimento" />
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
    titulo: {
        color: globalStyles.corSecundaria,
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 50,
        textAlign: 'center',
    },
    servicoContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        width: '80%'
    },
    servicoInfoContainer: {
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        width: '100%',
    },
    textoInfoServico: {
        color: globalStyles.corSecundaria,
        fontSize: 18,
        fontWeight: 'bold',
    },
})