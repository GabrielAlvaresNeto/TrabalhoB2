import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { Link } from '@react-navigation/native';
import AuthContext from "../contexts/AuthContext";
import { useContext, useState } from "react";


export default function LoginPage(){
    
    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <Image
                style={styles.login_image}
                source={{ uri: require('../assets/logo.png')}}>
            </Image>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(e) => {
                    setEmail(e.value);
                    console.log(email);
                }} 
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={(e) => {
                    setSenha(e.value);
                    console.log(senha);
                }} 
                placeholder="Senha"
            />
            <TouchableOpacity style={styles.botao} onPress={() => signIn()}>
                <Text style={styles.text_botao}>Entrar</Text>
            </TouchableOpacity>
            
            <View style={styles.links}>
                <Link style={styles.link_registro} to={{ screen: "Tela de Registro"}}>Cadastre-se</Link>
                <Link style={styles.link_registro} to={{ screen: "Tela de Recuperacao"}}>Esqueceu sua senha?</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    login_image: {
        width: '350px',
        height: '350px',
        resizeMode: 'contain'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
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