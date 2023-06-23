import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailFilme({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Página de detalhes de um filme</Text>
            <Text style={styles.texto}>Em Processo...</Text>

            <View style={styles.botaoView}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Comprar Filme", {})}>
                    <Text style={styles.text_botao}>Comprar</Text>
                </TouchableOpacity>
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
    texto: {
        fontSize: 18,
        fontWeight: 600
    },
    botaoView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'centar',
        justifyContent: 'center'
    },
    botao: {
        width: '95%',
        height: '40px',
        borderRadius: 15,
        marginTop: '15px',
        marginBottom: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#026773',
    },
    text_botao: {
        color: 'white',
        fontSize: 18
    }
})