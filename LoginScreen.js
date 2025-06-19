import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/ecochiloe_3.png')}
        style={styles.logo_estilo}
        />
      <Text style={styles.bienvenida_texto}>¡Bienvenido(a)!</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [ 
            styles.botones,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>INICIAR</Text>
      </Pressable>
    </View>
  );
}

// Creando los diferentes estilos
const styles = StyleSheet.create({
  
// Estilo del fondo
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150,
  },

// Estulo para el texto de bienvenida
  bienvenida_texto: {
    marginVertical: -30,
    fontSize: 20,
    color: '#00000',
    fontWeight: 'bold',
  },

// Estilo para el texto de los botones
  textocolor_botones: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#00000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

// Estilo para los botones
  botones: {
    marginVertical: 180, 
    width: 150,
    height: 60, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },

// Estilo Logo
  logo_estilo: {
    marginVertical: -50,
    width: 275,
    height: 275,
    resizeMode: 'contain',

  }
});
