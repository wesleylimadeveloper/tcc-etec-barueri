import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default (props) => {
    return (
        <TouchableOpacity style={styles.botao} onPress={props.onPress}>
            <Text style={styles.textoBotao}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        marginBottom: 10,
        paddingLeft: 10,
        width: 300,
    },
    textoBotao: {
        fontSize: 20,
    },
  });