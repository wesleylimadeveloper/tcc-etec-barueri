import React from 'react'
import { 
    Image, 
    StyleSheet 
} from 'react-native'
import logo from '../assets/logo.png'

export default () => {
    return (
        <Image style={styles.logo} source={logo} />
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 300,
        width: 305,
    }
})