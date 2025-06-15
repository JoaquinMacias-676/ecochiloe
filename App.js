import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const logo = require('./assets/logo_ecochiloe.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ 
        widht: 200, 
        height: 200,
        resizeMode: 'center',
        }} />
      <StatusBar style="auto" />
      <Text>Tonto el que lea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
