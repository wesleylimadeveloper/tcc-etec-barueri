import React, { useEffect, useState } from 'react'
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import api from '../api/api'
import Titulo from '../components/Titulo'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ route }) => {
    const [servicos, setServicos] = useState([])
    const { cod_fornecedor, nome_fantasia, fotos_lugar } = route.params

    useEffect(() => {
        async function getServicos() {
            try {
               const { data } = await api.get(`/servicos/${cod_fornecedor}`)
               setServicos(data)
            } catch (error) {
                console.log(error)
            }
        }
        getServicos()
    }, [])

    useEffect(() => {
        api.get(`/servicos/${cod_fornecedor}`)
            .then(response => setServicos(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.nomeFantasiaContainer}>
                <Titulo>
                    <Text>{nome_fantasia}</Text>
                </Titulo>
            </View>
            <View style={styles.imagemContainer}>
                <Image style={styles.imagemEstabelecimento} 
                    source={{ uri: `${fotos_lugar}` }} 
                />
            </View>
            <Text style={styles.textoServicos}>Serviços</Text>
            <View style={styles.servicosContainer}>
                <FlatList 
                    data={servicos}
                    keyExtractor={item => item.cod_servicos.toString()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <View style={styles.infoServico}>
                                    <Text style={styles.textoInfoServico}>{item.nome_servico}</Text>
                                    <Text style={styles.textoInfoServico}>R$ {item.valor.toString().replace(".", ",")}</Text>
                                </View>
                                <Divider orientation="horizontal" />
                            </View>
                        )
                    }}
                />
            </View>
            <BotaoPrincipal title="Agendar" onPress={() => console.log(servicos)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
    },
    nomeFantasiaContainer: {
        marginBottom: 5,
        marginTop: 50,
        width: '85%',
    },
    imagemContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    imagemEstabelecimento: {
        height: 218,
        width: 330,
    },
    textoServicos: {
        color: globalStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    servicosContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 20,
        padding: 15,
        width: '85%',
    },
    infoServico: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textoInfoServico: {
        color: globalStyles.corSecundaria,
        fontSize: 16,
        fontWeight: 'bold',
    }
})