import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Titulo from '../components/Titulo'
import Input from '../components/Input'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
  const [cnpj, setCnpj] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [horarioFuncionamento, setHorarioFuncionamento] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={globalStyles.corSecundaria}
        barStyle="light-content" />
      <Titulo>
        <Text>Cadastro de Fornecedor</Text>
      </Titulo>
      <View style={styles.inputsContainer}>
        <Input
          maxLenght={11}
          onChangeText={value => setCnpj(value)}
          placeholder="CNPJ"
          value={cnpj}
        />
        <Input
          onChangeText={value => setRazaoSocial(value)}
          placeholder="Razão Social"
          value={razaoSocial}
        />
        <Input
          onChangeText={value => setNomeFantasia(value)}
          placeholder="Nome Fantasia"
          value={nomeFantasia}
        />
        <Input
          keyboardType="phone-pad"
          onChangeText={value => setTelefone(value)}
          placeholder="Telefone"
          textContentType="telephoneNumber"
          value={telefone}
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
          keyboardType="number-pad"
          onChangeText={value => setHorarioFuncionamento(value)}
          placeholder="Horário de Funcionamento"
          value={horarioFuncionamento}
        />
      </View>
      <View>
        <BotaoPrincipal
          onPress={() => navigation.navigate("TelaCadastroEndereco")}
          title="Avançar" />
      </View>
    </View>
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
    marginBottom: 5,
    marginTop: 10,
  },
})