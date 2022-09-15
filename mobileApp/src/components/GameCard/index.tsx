import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    Ads: number;
  };
  bannerUrl: string;
}

interface Props {
  data: GameCardProps;
}

export function GameCard({ data, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.Ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
