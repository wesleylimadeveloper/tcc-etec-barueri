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
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={CommonStyles.corSecundaria}
        barStyle="light-content" />
      <Text style={styles.titulo}>Dados de Cliente</Text>
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
    height: 170,
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10
  },
});