import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "color";
interface Props {
  route: {
    params: {
      name: string;
    };
  };
}

const Detais = ({ route }: Props) => {
  const { name: colorName } = route.params;
  const color = Color(colorName);
  return (
    <View style={[styles.container, { backgroundColor: colorName }]}>
      <View>
        <Text style={styles.textDisplay}>{colorName}</Text>
        <Text>{color.rgb().toString()}</Text>
        <Text>{color.hsl().toString()}</Text>
      </View>
    </View>
  );
};

export default Detais;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textDisplay: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
