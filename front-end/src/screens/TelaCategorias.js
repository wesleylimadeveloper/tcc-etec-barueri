import React from 'react';
import { 
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import SearchBar from '../components/SearchBar';
import CommonStyles from '../CommonStyles';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.searchBarContainer}>
                <SearchBar 
                    placeholder="Buscar..." 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
    },
    searchBarContainer: {
        marginVertical: 20,
    },
});