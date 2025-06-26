import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';

export default function BusquedaCultivos({ navigation }) {
  return (
    <View style={styles.container}>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }
        ]}>
        <Text style={styles.textocolor_botones}>Tubérculos</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Hortalizas</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Frutas</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [ 
            styles.botones_tipo_cultivo,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }
        ]}>
        <Text style={styles.textocolor_botones}>Cereales</Text>
      </Pressable>
    </View>
  );
}