import {useState,useEffect} from 'react';
import {useNavigation} from "@react-navigation/native"
import { Image, FlatList } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { styles } from './styles';

import logoImage from '../../assets/logo-nlw-esports.png';
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from '../../components/Background';

export function Home() {

    const [games, setGames] = useState<GameCardProps[]>([]);
    const navigation = useNavigation()

    function handleOpenGame(){
        navigation.navigate('game')
    }

    useEffect(() =>{
        fetch('http://192.168.1.5:3333/games')
        .then(response => response.json())
        .then(data =>{
        // console.log(data)
        setGames(data);
     })
    },[])

    return(
        <Background>
            <SafeAreaView style={styles.container}>
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
                            onPress={handleOpenGame}
                        />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.contentList}
                />

            </SafeAreaView>
        </Background>
    )
}