import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  addColor: (color: string) => void;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorForm = ({ addColor, color, setColor }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Color"
        onChangeText={(text) => setColor(text)}
        value={color}
      />
      <Button
        title="Add"
        onPress={() => {
          addColor(color);
        }}
      />
    </View>
  );
};

export default ColorForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
