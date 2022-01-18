import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
   route: {
        params: {
            name: string;
        };
      }; 
}

const Detais = ({route}:Props) => {
    return (
        <View style={styles.container}>
            <Text>Details</Text>
            <Text>{route.params.name}</Text>
        </View>
    )
}

export default Detais

const styles = StyleSheet.create({
      container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
