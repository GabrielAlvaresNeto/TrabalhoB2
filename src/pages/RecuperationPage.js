import { Text, View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { Link } from '@react-navigation/native';
import { useState } from "react";

export default function RecuperationPage() {

    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.texto_informacao}>Um e-mail será enviado para recuperação de sua senha</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(e) => {
                    setEmail(e.value);
                }} 
                placeholder="Email"
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Tela de Login", {})}>
                <Text style={styles.text_botao}>Enviar Email</Text>
            </TouchableOpacity>

            <View style={styles.links}>
                <Link style={styles.link_registro} to={{ screen: "Tela de Login"}}>Entre</Link>
                <Link style={styles.link_registro} to={{ screen: "Tela de Registro"}}>Cadastre-se</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    texto_informacao: {
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '10px'
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: '10px'
    },
    botao: {
        padding: '10px',
        backgroundColor: '#024959',
        marginTop: '20px',
        marginBottom: '7px',
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
    },
    text_botao: {
        color: '#F2E3D5',
        fontSize: 16
    },
    links: {
        flexDirection:'row',
        width: '70%',
        justifyContent: 'space-between'
    },
    link_registro: {
        marginBottom: '5px',
        color: '#025951'
    }
})