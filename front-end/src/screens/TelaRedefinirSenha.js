import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Input from '../components/Input'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default () => {
  const [email, setEmail] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={globalStyles.corSecundaria}
        barStyle="light-content" />
      <Text style={styles.titulo}>Redefinir Senha</Text>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={(txtEmail) => setEmail(txtEmail)}
          placeholder="Informe o e-mail ou usuário"
          value={email}
        />
      </View>
      <View>
        <BotaoPrincipal title="Redefinir Senha" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: globalStyles.corPrincipal,
    flex: 1,
  },
  titulo: {
    color: globalStyles.corSecundaria,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 250,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
})