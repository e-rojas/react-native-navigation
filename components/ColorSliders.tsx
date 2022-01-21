import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import ColorSlider from "./ColorSlider";
import TabIcon from "./TabIcon";
const Color = require('color');

type Props = {
  addColor: (color: string) => void
};

const ColorSliders = ({addColor}: Props) => {
  const [rgbRed, setRGBRed] = React.useState(0);
  const [rgbGreen, setRGBGreen] = React.useState(0);
  const [rgbBlue, setRGBlue] = React.useState(0);
  const color = Color(`rgb(${rgbRed},${rgbGreen},${rgbBlue})`);
  return (
    <View style={styles.container}>
      <ColorSlider rgbValue={rgbRed} setRGBValue={setRGBRed} rgbType="R" />
      <ColorSlider rgbValue={rgbGreen} setRGBValue={setRGBGreen} rgbType="B" />
      <ColorSlider rgbValue={rgbBlue} setRGBValue={setRGBlue} rgbType="G" />
      <View style={styles.sampleContainer}>
        <View style={[styles.sample,{backgroundColor:`rgb(${rgbRed},${rgbGreen},${rgbBlue})`}]}></View>
      <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={[styles.button]}
      onPress={() => {
       addColor(color.hex());
      }}
      >
      <TabIcon name="copy" color="gray" />
      </TouchableHighlight>
      </View>
    </View>
  );
};

export default ColorSliders;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 1,
    borderColor: "gray",
  },
  text: {
    width: "10%",
  },
  sampleContainer:{
   alignSelf:'stretch',
   flexDirection:'row',
   justifyContent:'space-around',
   alignItems:'center',
   paddingTop:10,
    paddingBottom:10,
   
    
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10,
   
  },
});
