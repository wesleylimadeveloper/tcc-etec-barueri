import React, { useEffect, useState } from 'react'
import {
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
    const { cod_categoria, nome_categoria } = route.params
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
            <View style={styles.titulo}>
                <Titulo>
                    <Text>{nome_categoria}</Text>
                </Titulo>
            </View>
            <FlatList
                data={servicos}
                keyExtractor={item => item.cod_servicos.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.servicoContainer}>
                            <Image style={styles.fotoLugar} source={{ uri: `${item.fotos_lugar}` }} />
                            <TouchableOpacity style={styles.nomeFantasiaContainer}
                                onPress={() => navigation.navigate("TelaEstabelecimento", item)}>
                                <Text style={styles.nomeFantasia}>{item.nome_fantasia}</Text>
                                <Divider />
                            </TouchableOpacity>
                            <View style={styles.servicoInfoContainer}>
                                <Text style={styles.textoInfoServico}>{item.nome_servico}</Text>
                                <Text style={styles.textoInfoServico}>R$ {item.valor.toString().replace(".", ",")}</Text>
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
    titulo: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 30,
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