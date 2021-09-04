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
import BotaoSecundario from '../components/BotaoSecundario'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={globalStyles.corSecundaria}
        barStyle="light-content" />
      <Titulo>
        <Text>Cadastro de Endereço</Text>
      </Titulo>
      <View style={styles.inputsContainer}>
        <Input
          onChangeText={value => setCep(value)}
          placeholder="CEP"
          value={cep}
        />
        <Input
          onChangeText={value => setLogradouro(value)}
          placeholder="Logradouro"
          value={logradouro}
        />
        <Input
          onChangeText={value => setNumero(value)}
          placeholder="Número"
          value={numero}
        />
        <Input
          onChangeText={value => setComplemento(value)}
          placeholder="Complemento"
          value={complemento}
        />
        <Input
          onChangeText={value => setBairro(value)}
          placeholder="Bairro"
          value={bairro}
        />
        <Input
          onChangeText={value => setCidade(value)}
          placeholder="Cidade"
          value={cidade}
        />
      </View>
      <View style={styles.botoesContainer}>
        <BotaoPrincipal
          onPress={() => navigation.navigate("TabUsuario")}
          title="Cadastrar"
        />
        <BotaoSecundario title="Pular" />
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
    height: 315,
    justifyContent: 'space-around',
    marginTop: 10,
  },
  botoesContainer: {
    height: 100,
    justifyContent: 'space-around',
  },
})