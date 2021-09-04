import React from 'react'
import { 
    StyleSheet, 
    TextInput 
} from 'react-native'
import globalStyles from '../styles/globalStyles'

export default ({ onChangeText, placeholder, secureTextEntry, value }) => {
    return(
        <TextInput 
            style={styles.input}
            onChangeText={onChangeText} 
            placeholder={placeholder}
            placeholderTextColor='gray'
            secureTextEntry={secureTextEntry}
            value={value}  
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        color: globalStyles.corSecundaria,
        fontSize: 16,
        paddingVertical: 6,
        textAlign: 'center',
        width: 300,
    },
})