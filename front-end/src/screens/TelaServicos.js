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
import { Divider } from 'react-native-elements/dist/divider/Divider'
import api from '../api/api'
import Titulo from '../components/Titulo'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ navigation, route }) => {
    const [servicos, setServicos] = useState([])
    const [loading, setLoading] = useState(true)
    const usuario = route.params[1]
    const { id_estabelecimento, nome_fantasia, foto_estabelecimento } = route.params[0]
    const { id_cliente } = route.params[1]

    useEffect(() => {
        async function getServicos() {
            try {
                const { data } = await api.get(`/servicos/${id_estabelecimento}`)
                setServicos(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getServicos()
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
                    source={{ uri: `${foto_estabelecimento}` }}
                />
            </View>
            <Text style={styles.textoServicos}>Serviços</Text>
            {loading
                ?
                <View>
                    <ActivityIndicator style={styles.loading} size="large" color={globalStyles.corSecundaria} />
                </View>
                :
                <>
                    <View style={styles.servicosContainer}>
                        <FlatList 
                            data={servicos}
                            keyExtractor={item => item.id_servico.toString()}
                            renderItem={({item}) => {
                                return (
                                    <View>
                                        <View style={styles.infoServico}>
                                            <Text style={styles.textoInfoServico}>{item.nome_servico} - R$ {item.valor_servico.toString().replace(".", ",")}</Text>
                                            <TouchableOpacity
                                                style={styles.botaoAgendar} 
                                                onPress={() => navigation.navigate("TelaAgendamento", [usuario, id_estabelecimento, id_cliente, item.id_servico, item.nome_servico, item.valor_servico])}>
                                                <Text style={styles.textoBotaoAgendar}>Agendar</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <Divider orientation="horizontal" />
                                    </View>
                                )
                            }}
                        />
                    </View>
                </>   
            }

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
        marginVertical: 10,
        width: '85%',
    },
    imagemContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    imagemEstabelecimento: {
        height: 218,
        width: 330,
    },
    textoServicos: {
        color: globalStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    loading: {
        marginTop: 40,
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
        marginBottom: 10,
        marginTop: 5,
    },
    textoInfoServico: {
        color: globalStyles.corSecundaria,
        fontSize: 14,
        fontWeight: 'bold',
    },
    botaoAgendar: {
        alignItems: 'center',
        backgroundColor: globalStyles.corSecundaria,
        borderRadius: 3,
        justifyContent: 'center',
        padding: 2,
        width: '25%'
    },
    textoBotaoAgendar: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
})