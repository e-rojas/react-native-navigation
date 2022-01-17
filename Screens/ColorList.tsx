import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    
}

const ColorList = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>ColorList</Text>
        </View>
    )
}

export default ColorList

const styles = StyleSheet.create({
      container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
