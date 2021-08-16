import React, { useState } from 'react';
import {
  StatusBar, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Input from '../components/Input';
import BotaoPrincipal from '../components/BotaoPrincipal';
import BotaoSecundario from '../components/BotaoSecundario';
import CommonStyles from '../CommonStyles';

export default ({ navigation }) => {
  
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
      <Text style={styles.titulo}>Cadastro de Endereço</Text>
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
          onPress={() => navigation.navigate("Tabs")}
          title="Cadastrar" 
        />
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
    justifyContent: 'center',
  },
  titulo: {
    color: CommonStyles.corSecundaria,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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
});