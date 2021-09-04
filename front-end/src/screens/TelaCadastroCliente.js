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
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={globalStyles.corSecundaria}
        barStyle="light-content" />
      <Titulo>
        <Text>Dados de Cliente</Text>
      </Titulo>
      <View style={styles.inputsContainer}>
        <Input
          onChangeText={value => setNome(value)}
          placeholder="Nome"
          value={nome}
        />
        <Input
          keyboardType="phone-pad"
          onChangeText={value => setTelefone(value)}
          placeholder="Telefone"
          textContentType="telephoneNumber"
          value={telefone}
        />
        <Input
          onChangeText={value => setDataNascimento(value)}
          placeholder="Data de nascimento"
          value={dataNascimento}
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
    height: 170,
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10
  },
})