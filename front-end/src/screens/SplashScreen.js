import React from 'react'
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import Logo from '../components/Logo'
import CommonStyles from '../CommonStyles'

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={CommonStyles.corSecundaria}
        barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Logo />
        <ActivityIndicator color={CommonStyles.corSecundaria} size="large" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: CommonStyles.corPrincipal,
    flex: 1,
  },
  logoContainer: {
    height: 400,
    justifyContent: 'space-between',
    marginTop: 100,
  }
})