import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommonStyles from '../CommonStyles';

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Tela Gerenciar Pedidos</Text>
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
    texto: {
        color: CommonStyles.corSecundaria,
        fontSize: 26,
        fontWeight: 'bold',
    },
})