import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import CommonStyles from '../CommonStyles'

export default (props) => {
    return(
        <TextInput 
            style={styles.input}
            onChangeText={props.onChangeText} 
            placeholder={props.placeholder}
            placeholderTextColor='gray'
            secureTextEntry={props.secureTextEntry}
            value={props.value}  
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        color: CommonStyles.corSecundaria,
        fontSize: 16,
        paddingVertical: 6,
        textAlign: 'center',
        width: 300,
    },
})