import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

export default ({ children }) => {
    return (
        <Text style={styles.titulo}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: globalStyles.corSecundaria,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})