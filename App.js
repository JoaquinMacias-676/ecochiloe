import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

const logo = require('./assets/ecochiloe_logo.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ 
        widht: 200, 
        height: 200,
        resizeMode: 'center',
        }} />
      <Text style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
      }}
      >EcoChiloé</Text>
      <StatusBar style="auto" />
      <Button 
        title='Inicie sesión'
        color="#000" 
        onPress={() => Alert.alert('¡Alerta!', 'Este es un mensaje')}/>
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
