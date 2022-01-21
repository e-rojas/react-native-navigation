import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import RgtActions from "./ListButtonActions";
interface Props {
  color: string;
  handlePress: () => void;
  deleteColor: (id: number) => void;
  item: { id: number; color: string };
}

const ListButton = ({ color, handlePress, item, deleteColor }: Props) => {
  const swipeableRef: any = React.useRef(null);
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={[styles.button]}
      onPress={() => handlePress()}
    >
      <Swipeable
        ref={swipeableRef}
        renderRightActions={() => RgtActions(deleteColor, item)}
      >
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor: color }]}></View>
          <Text style={styles.text}>{color}</Text>
        </View>
      </Swipeable>
    </TouchableHighlight>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    marginTop: 5,
    marginBottom: 5,
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
    marginBottom: 10,
    marginTop: 10,
  },
});
