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

export default ({ navigation }) => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [sexo, setSexo] = useState('')

  async function cadastrar() {
    if(nome == '' || sobrenome == '' || email == '' || senha == '' || confirmarSenha == '' || telefone == '' || sexo == '') {
      Alert.alert('Campos inválidos', 'Por favor, preencha todos os campos.')
    } else if(senha != confirmarSenha) {
      Alert.alert('Senhas divergentes', 'As senhas não conferem')
    } else {
      const cliente = { 
        "nome": nome, 
        "sobrenome": sobrenome, 
        "email": email, 
        "senha": senha, 
        "telefone": telefone, 
        "sexo": sexo 
      }

      const response = await api.post('/clientes', cliente)

      if(response.data == "Dados cadastrados com sucesso!") {
        Alert.alert('Cadastro realizado', 'Usuário cadastrado com sucesso!')
        navigation.navigate("TelaLogin")
      } else {
        Alert.alert('Erro', 'Não foi possível cadastrar o usuário.')        
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
          onChangeText={value => setSenha(value)}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
        />
        <Input
          onChangeText={value => setConfirmarSenha(value)}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          value={confirmarSenha}
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
        <BotaoPrincipal onPress={cadastrar} title="Cadastrar" />
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