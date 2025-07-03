import { Text, View, Pressable, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function Home({ navigation }) {
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

      <Text style={styles.textocolor}>MIS CULTIVOS</Text>
      <Text style={styles.textocolor_contador}>0/3</Text>
      
      <Pressable
        onPress={() => navigation.navigate('SeleccionCultivo')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            {
              backgroundColor: pressed ? '#0c7744' : '#78e0af', 
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 25,
            }
        ]}>
        <Text style={styles.textobotones_home}>¡Agrega un Cultivo!</Text>
        <Icon name="plus" size={24} color="#000" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('SeleccionCultivo')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            {
              backgroundColor: pressed ? '#0c7744' : '#78e0af', 
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 25,
            }
        ]}>
        <Text style={styles.textobotones_home}>¡Agrega un Cultivo!</Text>
        <Icon name="plus" size={24} color="#000" />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('SeleccionCultivo')}
        style={({ pressed }) => [
            styles.botones_principal,
            {
              backgroundColor: pressed ? '#0c7744' : '#78e0af', 
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 25,
            }
        ]}>
        <Text style={styles.textobotones_home}>¡Agrega un Cultivo!</Text>
        <Icon name="plus" size={24} color="#000" />
      </Pressable>
    </View>
  );
}