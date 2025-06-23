import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function BusquedaCultivos({ navigation }) {
  return (
    <View style={styles.container}>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [ 
            styles.botones,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }
        ]}>
        <Text style={styles.textocolor_botones}>Tubérculos</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [ 
            styles.botones,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Hortalizas</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [ 
            styles.botones,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Frutas</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [ 
            styles.botones,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Cereales</Text>
      </Pressable>
    </View>
  );
}

// Creando los diferentes estilos
const styles = StyleSheet.create({
  
// Estilo del fondo
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150,
  },

// Estilo para el texto de los botones
  textocolor_botones: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
// Estilo para los botones
  botones: {
    marginVertical: 10, 
    width: 200,
    height: 150, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },
});
