import React, { useState } from 'react'
import { 
    StyleSheet, 
    TextInput, 
    View 
} from 'react-native'
import { Icon } from 'react-native-elements'
import globalStyles from '../styles/globalStyles'

export default ({ onChangeText, placeholder, value }) => {
    const [focused, setFocused] = useState(false)

    return(
        <View style={focused ? styles.focusedSearchBar : styles.searchBar}>
            <Icon color={globalStyles.corSecundaria} name="search" size={20} type="font-awesome"  />
            <TextInput style={styles.input}
                onBlur={() => setFocused(false)}
                onChangeText={onChangeText}
                onFocus={() => setFocused(true)} 
                placeholder={placeholder}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        fontSize: 16,
        flexDirection: 'row',
        height: 40,
        paddingLeft: 10,
        width: 370,
    },
    focusedSearchBar: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderColor: globalStyles.corSecundaria,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 16,
        flexDirection: 'row',
        height: 40,
        paddingLeft: 10,
        width: 370,
    },
    input: {
        paddingLeft: 10,
        width: '90%',
    }
})