import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button, Alert} from 'react-native';

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
      <Pressable
        onPress={() => Alert.alert('¡Alerta!', 'Este es un mensaje')}
        style={({ pressed }) => [
          { padding: 10, borderRadius: 5, backgroundColor: pressed ? '#cce7cc' : '#39b54'}
        ]}
      >
        <Text style={{ color: 'fff', fontWeight: '600' }}>Presiona Aquí</Text>
      </Pressable>
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
