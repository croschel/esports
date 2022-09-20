import React from "react";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Image, View, FlatList } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  );
};
