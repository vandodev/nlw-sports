import {  FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import {useNavigation,useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context"
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Entypo } from '@expo/vector-icons';
import logoImage from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';

export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([]);

    const route = useRoute();
    const navigation = useNavigation();
    const game = route.params as GameParams;
   
    // console.log(game);

    const handleGoBack = () => {
        navigation.goBack();
    };

     useEffect(() => {
        fetch(`http://192.168.1.5:3333/games/${game.id}/ads`)
        .then((response) => response.json())
        .then((data) => {
            setDuos(data);
            console.log(data)
        });
    }, []);

    return(
        <Background>
            <SafeAreaView style={styles.container}>
                 <View style={styles.header}>
                    <TouchableOpacity onPress={() => handleGoBack()}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                         />
                    </TouchableOpacity>
                    <Image source={logoImage} style={styles.logo}></Image>
                    <View style={styles.right}/>
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode='cover'
                />

                <Heading
                  title={game.title}
                  subtitle={'Conecta-te e começa a jogar!'}
                /> 
                
                <FlatList 
                data={duos}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <DuoCard data={item}/>
                )}
                />
                
                
            </SafeAreaView>
        </Background>
    );
}