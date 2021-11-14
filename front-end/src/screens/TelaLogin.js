import React, { useState } from 'react'
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'
import { Icon } from 'react-native-elements'
import api from '../api/api'
import Logo from '../components/Logo'
import Input from '../components/Input'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function validarLogin(emailUsuario, senhaUsuario) {
    if(emailUsuario.trim() != '' && senhaUsuario.trim() != '') {
      api.get(`/usuarios/${emailUsuario}/${senhaUsuario}`)
        .then(response => {
          const [dadosLogin] = response.data
          if(emailUsuario.trim() == dadosLogin.email && senhaUsuario.trim() == dadosLogin.senha) {
            if(dadosLogin.tipo_de_conta == "CLIENTE") {
              navigation.navigate("TabUsuario")
            } else {
              navigation.navigate("TabFornecedor")
            }
          } else(
            Alert.alert("Senha incorreta", "Verifique e-mail e senha.")
          )
        })
        .catch(error => {
          Alert.alert("Senha incorreta", "Verifique e-mail e senha.")
        }) 
    } else {
      Alert.alert('Preencha todos os campos', "Digite e-mail e senha.")
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
        <BotaoPrincipal onPress={() => validarLogin(email, senha)} title="Entrar" />
        <TouchableOpacity style={styles.botaoFacebook}>
          <Icon color="#FFF" name="facebook-square" size={20} type="font-awesome" />
          <Text style={styles.textoBotaoFacebook}>Entrar com o Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoGoogle}>
          <Icon color="#555" name="google" size={20} type="font-awesome" />
          <Text style={styles.textoBotaoGoogle}>Entrar com a conta do Google</Text>
        </TouchableOpacity>
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
    height: 140,
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