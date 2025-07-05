import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    <View style={[styles.container, { paddingTop: 180 }]}>
      
      <Text style={styles.titulo_interfaz}>TIPO DE CULTIVOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{
          position: 'absolute',
          top: 120,
          left: 30,
        }}>
          <Icon name='caret-left' size={25} color="#fff" style={{ zIndex: 1 }}/>
          <Icon name='caret-left' size={55} color="#000" style={{
            top: -40,
            right: 6.5,
            zIndex: 0,
          }} />
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