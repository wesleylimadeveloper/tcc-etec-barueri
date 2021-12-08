import React, { useState } from 'react'
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

import api from '../api/api'
import Logo from '../components/Logo'
import Input from '../components/Input'
import BotaoPrincipal from '../components/BotaoPrincipal'
import BotaoSecundario from '../components/BotaoSecundario'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function entrar(emailUsuario, senhaUsuario) {
    if(emailUsuario.trim() == '' || senhaUsuario.trim() == '') {
      Alert.alert('Preencha todos os campos', 'Digite e-mail e senha.')
    } else {
      try {
        const { data } = await api.get(`/clientes/${email}`)
        const [usuario] = data

        if(emailUsuario.trim() == usuario.email_cliente && senhaUsuario == usuario.senha_cliente) {
        navigation.navigate("TelaInicio", usuario)
        } else {
        Alert.alert('Senha incorreta', 'Verifique e-mail e senha.')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={globalStyles.corSecundaria}
        barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputsContainer}>
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
      </View>
      <View style={styles.botoesContainer}>
        <BotaoPrincipal onPress={() => entrar(email, senha)} title="Entrar" />
        <BotaoSecundario onPress={() => navigation.navigate("TelaCadastro")} title="Cadastrar" />
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
  logoContainer: {
    marginTop: -90,
  },
  inputsContainer: {
    height: 90,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  botoesContainer: {
    height: 90,
    justifyContent: 'space-between',
  },
  botaoFacebook: {
    alignItems: 'center',
    backgroundColor: '#1877F2',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 300,
  },
  textoBotaoFacebook: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  botaoGoogle: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 300,
  },
  textoBotaoGoogle: {
    color: '#555',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
})