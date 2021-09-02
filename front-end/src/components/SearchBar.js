import React from 'react'
import { 
    StyleSheet, 
    TextInput, 
    View 
} from 'react-native'
import { Icon } from 'react-native-elements'
import CommonStyles from '../CommonStyles'

export default (props) => {
    return(
        <View style={styles.searchBar}>
            <Icon color={CommonStyles.corSecundaria} name="search" size={20} type="font-awesome"  />
            <TextInput style={styles.input}
                onChangeText={props.onChangeText} 
                placeholder={props.placeholder}
                value={props.value}
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
    input: {
        paddingLeft: 10,
        width: '90%',
    }
})