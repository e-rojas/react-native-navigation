import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import ListButton from "../components/ListButton";
import { Data } from "../data";
type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

interface Props {
  navigation: AboutScreenNavigationProp;
}

const Home = ({ navigation }: Props) => {
  function handlePress(color: string) {
    navigation.navigate("Details", { name: color });
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={Data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListButton
            color={item.color}
            handlePress={() => handlePress(item.color)}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
});
