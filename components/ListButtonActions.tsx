import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import TabIcon from "./TabIcon";
export const RgtActions = (
  progress: any,
  dragX: {
    interpolate: (arg0: { inputRange: number[]; outputRange: number[] }) => any;
  }
) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
  });
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#6D8299"
      onPress={() => {}}
      style={styles.rightAction}
    >
      <TabIcon name="trash" color="#fff" />
      {/* <Text style={styles.actionText}>Delete</Text> */}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  actionText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#EFF8FF",
    paddingRight: 2,
    paddingLeft: 2,
  },
  rightAction: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    backgroundColor:'orange',
    borderRadius: 5,
 
  },
});
