import {useState,useEffect} from 'react'
import { View, Image, FlatList } from "react-native";
import { styles } from './styles';
import logoImage from '../../assets/logo-nlw-esports.png';
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";

export function Home() {

    const [games, setGames] = useState<GameCardProps[]>([]);

    useEffect(() =>{
        fetch('http://192.168.1.5:3333/games')
        .then(response => response.json())
        .then(data =>{
        // console.log(data)
        setGames(data);
     })
    },[])

    return(
        <View style={styles.container}>
            <Image source={logoImage} style={styles.logo}></Image>
            <Heading
              title='Encontra o teu duo!'
              subtitle='Seleciona o jogo que deseja jogar...'
            />

            <FlatList 
                data={games}
                keyExtractor = {item => item.id}
                renderItem = {({item}) =>(                    
                    <GameCard 
                        data={item}
                    />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentList}
            />

        </View>
    )
}