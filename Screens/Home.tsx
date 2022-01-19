import React from "react";
import { StyleSheet, View,FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import ListButton from "../components/ListButton";
import ColorForm from "../components/ColorForm";
type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

interface Props {
  navigation: AboutScreenNavigationProp;
}

const Home = ({ navigation }: Props) => {
  const [data, setData] = React.useState<{ color: string; id: number }[]>([]);
  const [color, setColor] = React.useState<string>("");
  const addColor = (color: string) => {
    setData([
      ...data,
      { color: color.toLocaleLowerCase(), id: data.length + 1 },
    ]);
    setColor("");
  };
  function handlePress(color: string) {
    navigation.navigate("Details", { name: color });
  }
  return (
    <View style={styles.container}>
      <ColorForm addColor={addColor} color={color} setColor={setColor} />
      <FlatList
        style={{ width: "100%" }}
        data={data}
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
