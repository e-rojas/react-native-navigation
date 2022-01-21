import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slider from "@react-native-community/slider";
type Props = {
    rgbValue: number, 
   setRGBValue: React.Dispatch<React.SetStateAction<number>>
   rgbType: string;
};

const ColorSlider = ({rgbValue,setRGBValue,rgbType}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{rgbType}:</Text>
        <Text style={styles.text}>{rgbValue} </Text>
      <Slider
        style={{ width: 250, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        step={3}
        onValueChange={(value) => setRGBValue(value)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export default ColorSlider;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
      },
      text: {
        width: "10%",
      },
});
