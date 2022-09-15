import React, { useEffect } from 'react';
import { FlatList, Image, View } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

export function Home() {
  const [games, setGames] = React.useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.38:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={games}
        contentContainerStyle={styles.contentList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
