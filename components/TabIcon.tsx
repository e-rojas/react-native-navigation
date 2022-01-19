import { FontAwesome } from '@expo/vector-icons';
import { Alert, Animated, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

function TabIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return (
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name={props.name}
          color={props.color}
          size={18}
          style={{ display:'flex',alignItems:'center',justifyContent:'center'}}
        />
      </Pressable>
    );
  }
  export default TabIcon;