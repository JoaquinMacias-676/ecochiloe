import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';

export default function SeleccionCultivo({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Baloo 2 Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo_interfaz}>TIPO DE CULTIVOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.flechaboton}>
        <Image
          source={require('./assets/flecha_atras.png')}
          style={[styles.flechaimagen, { tintColor: '#000000'}]}
        />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Tuberculos')}
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }
        ]}>
        <Text style={styles.texto_selec_cultivos}>Tubérculos</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Hortalizas')}
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.texto_selec_cultivos}>Hortalizas</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Frutas')}
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.texto_selec_cultivos}>Frutas</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Medicinales')}
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.texto_selec_cultivos}>Medicinales</Text>
      </Pressable>
    </View>
  );
}