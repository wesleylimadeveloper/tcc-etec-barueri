import React, { useState } from 'react'
import { 
    StyleSheet, 
    TextInput 
} from 'react-native'
import globalStyles from '../styles/globalStyles'

export default ({ onChangeText, placeholder, secureTextEntry, value }) => {
    const [focused, setFocused] = useState(false)

    return(
        <TextInput 
            style={focused ? styles.focusedInput : styles.input}
            onBlur={() => setFocused(false)}
            onChangeText={onChangeText}
            onFocus={() => setFocused(true)} 
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
    focusedInput: {
        backgroundColor: '#FFF',
        borderColor: globalStyles.corSecundaria,
        borderRadius: 5,
        borderWidth: 2,
        color: globalStyles.corSecundaria,
        fontSize: 16,
        paddingVertical: 6,
        textAlign: 'center',
        width: 300,
    },
})