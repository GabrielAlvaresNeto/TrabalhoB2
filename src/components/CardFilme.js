import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Link } from '@react-navigation/native';

export default function CardFilme({filme, navigation}){
    return(
        <View style={styles.container}>
            <Image 
                style={styles.imagem} 
                source={{uri: "https://api.otaviolube.com" + (filme.attributes.poster.data.attributes.url)}}></Image>
            <Text style={styles.titulo}>
                {filme.attributes.titulo}
            </Text>
            <Text style={styles.subtitulo}>
                {filme.attributes.subtitulo}
            </Text>
                {filme.attributes.sinopse.length < 200 ?
                    <Text style={styles.sinopse}>
                        {filme.attributes.sinopse}
                    </Text> : <>
                    <Text style={styles.sinopse}>
                        {filme.attributes.sinopse.slice(0,200) + '...'}
                    </Text>
                    <Link to={{ screen: "Detalhes do Filme", params: { id: '1' }}}>Detalhes</Link>
                    </>
                }

            <View style={styles.botaoView}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.text_botao}>Comprar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: '20px',
        backgroundColor: '#3CA6A6',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius: '20px'
    },
    imagem: {
        width: '80%',
        height: '180px',
        resizeMode: 'contain',
        marginBottom: '10px'
    },
    titulo: {
        fontSize: '24px',
        color: '#012E40',
        fontWeight: 'bold',
        paddingBottom: '5px'
    },
    subtitulo: {
        fontSize: '18px',
        color: '#012E40',
        paddingBottom: '5px'
    },
    sinopse: {
        fontSize: '16px',
        color: '#F2F2F2' 
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