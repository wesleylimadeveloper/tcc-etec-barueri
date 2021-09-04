import React from 'react'
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    View
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import globalStyles from '../styles/globalStyles'

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <MapView
                style={styles.mapa}
                initialRegion={{
                    latitude: -23.499796,
                    longitude: -46.812634,
                    latitudeDelta: 0.0125,
                    longitudeDelta: 0.0125,
                }}>
                    <Marker 
                        coordinate={{
                            latitude: -23.499796,
                            longitude: -46.812634,
                        }}
                        description="Avenida Diretriz, 422 - Jardim Mutinga - Barueri"
                        title="Casa"
                    />
            </MapView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    mapa: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
})