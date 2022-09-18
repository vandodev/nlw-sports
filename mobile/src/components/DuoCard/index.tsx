import React from 'react';
import {  View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label="Nome"
        value="Evandro Oliveira"
      />
       <DuoInfo 
        label="Tempo de jogo"
        value="2 anos"
      />
       <DuoInfo 
        label="Disponibilidade"
        value="3 dias 16h - 29h"
      />
       <DuoInfo 
        label="Chamada de áudio?"
        value="Sim"
        colorValue="green"
      />
    </View>
  );
}