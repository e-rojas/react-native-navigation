import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from '../App'
type AboutScreenNavigationProp = StackNavigationProp<RootStackParamList,'Home'>;

interface Props {
  navigation: AboutScreenNavigationProp;   
}

const Home = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="About" onPress={() => { navigation.navigate('Details', {name:'Jane'})}} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
      container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
