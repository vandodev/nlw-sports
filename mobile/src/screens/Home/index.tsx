import { View, Image } from "react-native";
import { styles } from './styles';
import logoImage from '../../assets/logo-nlw-esports.png';

export function Home() {
    return(
        <View style={styles.container}>
            <Image source={logoImage} style={styles.logo}></Image>
        </View>
    )
}