import { View, Image, FlatList } from "react-native";
import { styles } from './styles';
import logoImage from '../../assets/logo-nlw-esports.png';
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import {GAMES} from '../../utils/games'

export function Home() {
    return(
        <View style={styles.container}>
            <Image source={logoImage} style={styles.logo}></Image>
            <Heading
              title='Encontra o teu duo!'
              subtitle='Seleciona o jogo que deseja jogar...'
            />

            <FlatList 
                data={GAMES}
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