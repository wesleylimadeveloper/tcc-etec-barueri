import React, { useState } from 'react'
import { 
    StatusBar,
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import BotaoPrincipal from '../components/BotaoPrincipal'
import CommonStyles from '../CommonStyles'

export default ({ navigation }) => {
    const [checked, setChecked] = useState('usuário')
    
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <Text style={styles.titulo}>Cadastrar</Text>
            <View style={styles.radioContainer}>
                <View style={styles.radioOptionContainer}>
                    <RadioButton
                        color={CommonStyles.corSecundaria}
                        onPress={() => setChecked('usuário')}
                        status={checked === 'usuário' ? 'checked' : 'unchecked'}
                        value="usuário"
                    />
                    <Text style={styles.texto}>Usuário</Text>
                </View>
                <View style={styles.radioOptionContainer}>
                    <RadioButton
                        color={CommonStyles.corSecundaria}
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
                        checked == 'usuário'
                        ? () => navigation.navigate("TelaCadastroUsuario")
                        : () => navigation.navigate("TelaCadastroFornecedor")
                    }
                    title="Avançar"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        color: CommonStyles.corSecundaria,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
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
        color: CommonStyles.corSecundaria,
        fontSize: 18,
    },
})