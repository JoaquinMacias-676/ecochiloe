import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function SeleccionCultivo({ navigation }) {
  return (
    <View style={styles.container}>
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
            styles.botones_principal,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }
        ]}>
        <Text style={styles.textocolor_botones}>Tubérculos</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Hortalizas')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Hortalizas</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Frutas')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Frutas</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Cereales')}
        style={({ pressed }) => [ 
            styles.botones_principal,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Cereales</Text>
      </Pressable>
    </View>
  );
}