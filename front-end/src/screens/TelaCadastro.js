import React, { useState } from 'react'
import { 
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
    const [checked, setChecked] = useState('usuário')
    
    return (
        <View style={styles.container}>
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
                        onPress={() => setChecked('usuário')}
                        status={checked === 'usuário' ? 'checked' : 'unchecked'}
                        value="usuário"
                    />
                    <Text style={styles.texto}>Usuário</Text>
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