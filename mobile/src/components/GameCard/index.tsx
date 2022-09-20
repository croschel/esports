import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { GameCardProps } from "../../@types/game";
import { THEME } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export const GameCard = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
