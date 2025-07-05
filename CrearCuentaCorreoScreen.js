import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_login';
import { useFonts } from 'expo-font';

export default function CrearCuentaCorreo({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto Condensed Bold': require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
    'Roboto Light': require('./assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  return(
    <View style={styles.container_blanco}>

        <Image
          source={require('./assets/ecochiloe_3.png')}
          style={styles.logo_estilo} />
        <Pressable
        onPress={() => navigation.navigate('Login')}
        style={({ pressed }) => [ 
            styles.botones_login,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af' }]}>
        <Text style={styles.textobotones_login}>boton de prueba</Text>
        </Pressable>
    </View>
  );
}