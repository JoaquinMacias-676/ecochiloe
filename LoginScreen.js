import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function Login({ navigation }) {
  return (
    <View style={styles.container_blanco}>
      <Image
        source={require('./assets/ecochiloe_3.png')}
        style={styles.logo_estilo}/>
      <Text style={styles.bienvenida_texto}>¡Bienvenido(a)!</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [ 
            styles.botones_login,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }]}>
        <Text style={styles.textobotones_home}>INICIAR</Text>
      </Pressable>
    </View>
  );
}