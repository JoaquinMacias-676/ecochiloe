import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textocolor}>Mis Cultivos</Text>
      <Text style={styles.textocolor_contador}>0/3</Text>
      <Pressable
        onPress={() => navigation.navigate('SeleccionCultivo')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textobotones_home}>¡Agrega un Cultivo!</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('SeleccionCultivo')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textobotones_home}>¡Agrega un Cultivo!</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('SeleccionCultivo')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textobotones_home}>¡Agrega un Cultivo!</Text>
      </Pressable>
    </View>
  );
}