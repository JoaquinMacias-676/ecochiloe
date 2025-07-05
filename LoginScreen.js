import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_login';
import { useFonts } from 'expo-font';

export default function Login({ navigation }) {
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
        <Text style={styles.textobotones_login}>INICIAR</Text>
      </Pressable>
    </View>
  );
}