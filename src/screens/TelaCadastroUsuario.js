import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Input from '../components/Input';
import BotaoPrincipal from '../components/BotaoPrincipal';
import CommonStyles from '../CommonStyles';

export default ({ navigation }) => {

  const [nomeUsuario, setNomeUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [emailRecuperacao, setEmailRecuperacao] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  
  return (
    <View style={styles.container}>
      <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
      <View style={styles.inputsContainer}>
        <Input
          onChangeText={value => setNomeUsuario(value)}
          placeholder="Nome de usuário"
          value={nomeUsuario}
        />
        <Input
          onChangeText={value => setEmail(value)}
          placeholder="E-mail"
          value={email}
        />
        <Input
          onChangeText={value => setEmailRecuperacao(value)}
          placeholder="E-mail de recuperação"
          value={emailRecuperacao}
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
          title="Avançar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: CommonStyles.corPrincipal,
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    color: CommonStyles.corSecundaria,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputsContainer: {
    height: 270,
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10,
  },
});