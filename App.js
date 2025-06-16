import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button, Alert} from 'react-native';

const logo = require('./assets/ecochiloe_logo.png');

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'center'
      }}
      >Mis Cultivos</Text>
      <StatusBar style="auto" />
      <Pressable
        style={({ pressed }) => [
          { marginVertical: 10, padding: 50, borderRadius: 16, borderWidth: 2, bordercolor: '#0c7744', backgroundColor: pressed ? '#0c7744' : '#78e0af'}
        ]}
      >
        <Text style={{ color: '#fff', fontWeight: '800' }}>¡Agrega un Cultivo!</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          { marginVertical: 10, padding: 50, borderRadius: 16, borderWidth: 2, bordercolor: '#0c7744', backgroundColor: pressed ? '#0c7744' : '#78e0af'}
        ]}
      >
        <Text style={{ color: '#fff', fontWeight: '800' }}>¡Agrega un Cultivo!</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          { marginVertical: 10, padding: 50, borderRadius: 16, borderWidth: 2, bordercolor: '#0c7744', backgroundColor: pressed ? '#0c7744' : '#78e0af'}
        ]}
      >
        <Text style={{ color: '#fff', fontWeight: '800' }}>¡Agrega un Cultivo!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150
  },
});
