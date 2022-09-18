import React, { useEffect, useState } from 'react';
import {  View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data}: Props) {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  return (
    <View style={styles.container}>
      <DuoInfo 
        label="Nome"
        value={data.name}
      />
       <DuoInfo 
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />
       <DuoInfo 
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
       <DuoInfo 
        label="Chamada de áudio?"
        value="Sim"
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
    </View>
  );
}