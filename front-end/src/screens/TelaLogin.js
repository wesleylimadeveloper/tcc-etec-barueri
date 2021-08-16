import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import Logo from '../components/Logo';
import Input from '../components/Input';
import BotaoPrincipal from '../components/BotaoPrincipal';
import BotaoSecundario from '../components/BotaoSecundario';
import CommonStyles from '../CommonStyles';

export default () => {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={CommonStyles.corSecundaria}
        barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          onChangeText={(txtEmail) => setEmail(txtEmail)}
          placeholder="E-mail ou Usuário"
          value={email}
        />
        <Input
          onChangeText={(txtSenha) => setSenha(txtSenha)}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
        />
      </View>
      <View style={styles.botoesContainer}>
        <BotaoPrincipal title="Entrar com Facebook" />
        <BotaoPrincipal title="Entrar com a conta do Google" />
        <BotaoSecundario title="Pular" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: CommonStyles.corPrincipal,
    flex: 1,
  },
  logoContainer: {
    marginBottom: 15,
    marginTop: 50,
  },
  inputsContainer: {
    height: 100,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  botoesContainer: {
    height: 145,
    justifyContent: 'space-between',
  }
});