import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BotaoPrincipal from '../components/BotaoPrincipal';
import CommonStyles from '../CommonStyles';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={CommonStyles.corSecundaria}
        barStyle="light-content" />
      <Text style={styles.texto}>Mostre-me serviços para:</Text>
      <View style={styles.botoesContainer}>
        <BotaoPrincipal title="Homem" />
        <BotaoPrincipal title="Mulher" />
        <BotaoPrincipal title="Ambos" />
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
  texto: {
    color: CommonStyles.corSecundaria,
    fontSize: 22,
    marginBottom: 10,
    marginTop: 250,
    textAlign: 'center',
  },
  botoesContainer: {
    height: 150,
    justifyContent: 'space-between'
  }
});