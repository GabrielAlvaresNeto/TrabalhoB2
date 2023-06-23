import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CardFilme from '../components/CardFilme';
import { useEffect, useState } from 'react';

export default function CatalogoFilmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(function(){
        fetch('https://api.otaviolube.com/api/filmes?populate=*')
        .then(response => response.json())
        .then(objeto => setFilmes(objeto.data))
        .catch(error => console.error(error))
    }, []);

    return (
        <View style={styles.container}>
        { filmes.length > 0 ? filmes.map(filme => <CardFilme key={filme.id} filme={filme}/>) : <ActivityIndicator size={'large'}/>}
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
});