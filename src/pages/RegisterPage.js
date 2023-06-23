import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function LoginPage({navigation}){
    
    const [nomeUsuario, setNomeUsuario] = useState("");
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
                text={nomeUsuario}
                onChangeText={(e) => {
                    setNomeUsuario(e.value);
                }} 
                placeholder="Nome de Usuário"
            />
            <TextInput
                style={styles.input}
                text={email}
                onChangeText={(e) => {
                    setEmail(e.value);
                }} 
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                text={senha}
                onChangeText={(e) => {
                    setSenha(e.value);
                }} 
                placeholder="Senha"
            />
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Tela de Login", {})}>
                <Text style={styles.text_botao}>Registrar</Text>
            </TouchableOpacity>

            <View style={styles.links}>
                <Link style={styles.link_registro} to={{ screen: "Tela de Login"}}>Entre</Link>
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