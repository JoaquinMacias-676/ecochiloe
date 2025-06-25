import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Tuberculos({ navigation }) {
    return (
        <View style={styles.container}>
          <Pressable
            onPress={() => navigation.navigate('SeleccionCultivo')}
            style={styles.flechaboton}>
            <Image
              source={require('./assets/flecha_atras.png')}
              style={[styles.flechaimagen, { tintColor: '#000000'}]}/>
          </Pressable>
            <View style={styles.botones_horizontal}>
            <Pressable
                onPress={() => navigation.navigate('Home')}
                style={({ pressed }) => [ 
                    styles.botones,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>Papa Bruja</Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Home')}
                style={({ pressed }) => [ 
                    styles.botones,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>Papa Pukará</Text>
            </Pressable>
            </View>

            <View style={styles.botones_horizontal}>
            <Pressable
                onPress={() => navigation.navigate('Home')}
                style={({ pressed }) => [ 
                    styles.botones,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>Papa Murta Ojuda</Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Home')}
                style={({ pressed }) => [ 
                    styles.botones,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>Papa Cacho de Toro</Text>
            </Pressable>
            </View>  
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
    marginHorizontal: 10, 
    width: 160,
    height: 200, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },

// Estilo para que los botones esten uno al lado del otro
  botones_horizontal: {
    flexDirection: 'row',
  },

// Texto de Papas
  papas: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'Black',
    paddingTop: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

// Estilo Boton flecha
  flechaboton: {
    position: 'absolute',
    top: 50,
    left: -10,
    padding: 30,
  },

// Estilo imagen flecha
  flechaimagen: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    color: '#000000',
  },
});