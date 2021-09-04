import React, { useEffect, useState } from 'react'
import {
    Image, 
    ScrollView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native'
import SearchBar from '../components/SearchBar'
import Carousel from 'react-native-snap-carousel'
import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
    const [buscar, setBuscar] = useState('')
    const [estabelecimentos, setEstabelecimentos] = useState([])

    useEffect(() => {
        api.get('/estabelecimentos')
            .then(response => setEstabelecimentos(response.data))
            .catch(error => console.log(error))
    }, [])

    function estabelecimentosProximos({ item }) {
        return (
            <View style={styles.carouselContainer}>
                <Image style={styles.imagemEstabelecimento} 
                    source={{ uri: `${item.fotos_lugar}` }} />
                <View style={styles.infoContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("TelaEstabelecimento", item)}>
                        <Text style={styles.nomeFantasia}>{item.nome_fantasia}</Text>
                        <Text style={styles.endereco}>{item.logradouro}, {item.numero} - {item.cidade}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar 
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.searchBarContainer}>
                <SearchBar
                    onChangeText={value => setBuscar(value)} 
                    placeholder="Buscar..."
                    value={buscar} 
                />
            </View>
            <Text style={styles.titulo}>Estabelecimentos próximos</Text>
            <Carousel 
                data={estabelecimentos}
                itemWidth={350}
                renderItem={estabelecimentosProximos}
                sliderWidth={400}
            />
            <Text style={styles.titulo}>Promoções</Text>
            <Carousel 
                data={estabelecimentos}
                itemWidth={350}
                renderItem={estabelecimentosProximos}
                sliderWidth={400}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
    },
    searchBarContainer: {
        alignSelf: 'center',
        marginVertical: 20,
    },
    titulo: {
        color: globalStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    carouselContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 10,
        paddingVertical: 5,
    },
    imagemEstabelecimento: {
        height: 218,
        marginBottom: 2,
        width: 330,
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    nomeFantasia: {
        color: globalStyles.corSecundaria,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    endereco: {
        fontSize: 14,
        textAlign: 'center',
    }
})