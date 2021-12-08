import React, { useState } from 'react'
import {
    Alert,
    Picker,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View
} from 'react-native'

import api from '../api/api'
import Input from '../components/Input'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ navigation, route }) => {
    const { id_cliente, nome_cliente, sobrenome_cliente, email_cliente, telefone_cliente, sexo_cliente } = route.params
    const [nome, setNome] = useState(nome_cliente)
    const [sobrenome, setSobrenome] = useState(sobrenome_cliente)
    const [email, setEmail] = useState(email_cliente)
    const [telefone, setTelefone] = useState(telefone_cliente)
    const [sexo, setSexo] = useState(sexo_cliente)

    async function salvar() {
        if (nome == '' || sobrenome == '' || email == '' || telefone == '' || sexo == '') {
            Alert.alert('Campos inválidos', 'Por favor, preencha todos os campos.')
        } else {
            const cliente = {
                "nome": nome,
                "sobrenome": sobrenome,
                "email": email,
                "telefone": telefone,
                "sexo": sexo
            }

            const response = await api.put(`/clientes/${id_cliente}`, cliente)

            if (response.data == "Dados alterados com sucesso!") {
                Alert.alert('Dados alterados', 'Dados alterados com sucesso!')
                navigation.navigate("TelaLogin")
            } else {
                Alert.alert('Erro', 'Não foi possível alterar os dados.')
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.inputsContainer}>
                <Input
                    onChangeText={value => setNome(value)}
                    placeholder="Nome"
                    value={nome}
                />
                <Input
                    onChangeText={value => setSobrenome(value)}
                    placeholder="Sobrenome"
                    value={sobrenome}
                />
                <Input
                    onChangeText={value => setEmail(value)}
                    placeholder="E-mail"
                    value={email}
                />
                <Input
                    onChangeText={value => setTelefone(value)}
                    placeholder="Telefone"
                    value={telefone}
                />
                <View style={styles.pickerContainer}>
                    <Picker
                        style={styles.picker}
                        selectedValue={sexo}
                        onValueChange={value => setSexo(value)
                        }>
                        <Picker.Item label="Masculino" value="MASCULINO" />
                        <Picker.Item label="Feminino" value="FEMININO" />
                        <Picker.Item label="Outro" value="OUTRO" />
                    </Picker>
                </View>
            </View>
            <View>
                <BotaoPrincipal onPress={salvar} title="Salvar" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    inputsContainer: {
        height: 350,
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    pickerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 75,
    },
    picker: {
        width: '70%',
    }
})