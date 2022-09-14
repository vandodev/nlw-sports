import { View, Image } from "react-native";
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
            <GameCard 
                data={GAMES[0]}
            />
        </View>
    )
}