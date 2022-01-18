import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

interface Props {
  color: string;
  handlePress: () => void;
}

const ListButton = ({ color, handlePress }: Props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={[styles.button]}
      onPress={() => handlePress()}
    >
      <View style={styles.row}>
        <View style={[styles.sample, { backgroundColor: color }]}></View>
        <Text style={styles.text}>{color}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#000",
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
  },
});
