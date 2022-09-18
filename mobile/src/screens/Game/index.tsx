import {  Image, Text, TouchableOpacity, View } from 'react-native';
import {useNavigation,useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context"
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Entypo } from '@expo/vector-icons';
import logoImage from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { useState } from 'react';

export function Game() {
    const route = useRoute();
    const navigation = useNavigation();
    const game = route.params as GameParams;
   
    console.log(game);

 

    const handleGoBack = () => {
        navigation.goBack();
    };

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

                <DuoCard />
                
            </SafeAreaView>
        </Background>
    );
}