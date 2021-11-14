import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

import Logo from '../components/Logo'
import Input from '../components/Input'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

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
      </View>
      <View>
        <BotaoPrincipal
          onPress={() => navigation.navigate("TelaCadastroCliente")}
          title="Cadastrar"
        />
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
    height: 220,
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: -10,
  },
})