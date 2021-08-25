import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { Icon } from 'react-native-elements';
import Logo from '../components/Logo';
import Input from '../components/Input';
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
        <TouchableOpacity style={styles.botaoFacebook}>
          <Icon color="#FFF" name="facebook-square" size={20} type="font-awesome" />
          <Text style={styles.textoBotaoFacebook}>Entrar com o Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoGoogle}>
          <Icon color="#555" name="google" size={20} type="font-awesome" />
          <Text style={styles.textoBotaoGoogle}>Entrar com a conta do Google</Text>
        </TouchableOpacity>
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
});