import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    
}

const Detais = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Details</Text>
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
