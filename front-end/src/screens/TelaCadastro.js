import React, { useState } from 'react'
import { 
    SafeAreaView,
    StatusBar,
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import Titulo from '../components/Titulo'
import BotaoPrincipal from '../components/BotaoPrincipal'
import globalStyles from '../styles/globalStyles'

export default ({ navigation }) => {
    const [checked, setChecked] = useState('cliente')
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                backgroundColor={globalStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.titulo}>
                <Titulo>
                    <Text>Cadastrar</Text>
                </Titulo>
            </View>
            <View style={styles.radioContainer}>
                <View style={styles.radioOptionContainer}>
                    <RadioButton
                        color={globalStyles.corSecundaria}
                        onPress={() => setChecked('cliente')}
                        status={checked === 'cliente' ? 'checked' : 'unchecked'}
                        value="cliente"
                    />
                    <Text style={styles.texto}>Cliente</Text>
                </View>
                <View style={styles.radioOptionContainer}>
                    <RadioButton
                        color={globalStyles.corSecundaria}
                        onPress={() => setChecked('fornecedor')}
                        status={checked === 'fornecedor' ? 'checked' : 'unchecked'}
                        value="fornecedor"
                    />
                    <Text style={styles.texto}>Fornecedor</Text>
                </View>
            </View>
            <View>
                <BotaoPrincipal
                    onPress={
                        checked == 'cliente'
                        ? () => navigation.navigate("TelaCadastroCliente")
                        : () => navigation.navigate("TelaCadastroFornecedor")
                    }
                    title="Avançar"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        marginBottom: 15,
    },
    radioContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    radioOptionContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    texto: {
        color: globalStyles.corSecundaria,
        fontSize: 18,
    },
})