import React, { useState } from 'react'
import {
    Alert,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import DatePicker from 'react-native-datepicker'

import Titulo from '../components/Titulo'
import BotaoPrincipal from '../components/BotaoPrincipal'
import api from '../api/api'
import globalStyles from '../styles/globalStyles'

export default ({ navigation, route }) => {
    const usuario = route.params[0]    
    const id_estabelecimento = route.params[1]
    const id_cliente = route.params[2]
    const id_servico = route.params[3]
    const nome_servico = route.params[4]
    const valor_servico = route.params[5]

    const [data, setData] = useState('')

    async function agendar() {
        const agenda = {
            "id_estabelecimento": id_estabelecimento,
            "id_cliente": id_cliente,
            "id_servico": id_servico,
            "data_agenda": `${data} 00:00:00`,
            "status_agenda": "AGENDADO"
        }

        const response = await api.post('/agendas', agenda)

        if (response.data == "Dados cadastrados com sucesso!") {
            Alert.alert('Serviço agendado', 'Serviço agendado com sucesso!')
            navigation.navigate("TelaInicio", usuario)
        } else {
            Alert.alert('Erro', 'Preencha todos os dados.')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" 
            />
            <Titulo>
                <Text>{nome_servico} - R$ {valor_servico.toString().replace(".", ",")}</Text>
            </Titulo>
            <Text style={styles.texto}>Escolha a data que deseja agendar o serviço</Text>
            <DatePicker 
                style={{ width: '80%' }}
                cancelBtnText="Cancelar"
                confirmBtnText="Confirmar"
                date={data}
                format="YYYY-MM-DD"
                onDateChange={value => setData(value)}
                showIcon={false}
            />
            <Text style={styles.texto}>Escolha o horário</Text>
            <BotaoPrincipal onPress={agendar} title="Agendar" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center'
    },
    texto: {
        color: globalStyles.corSecundaria,
        fontSize: 16,
        marginVertical: 8,
    },
})