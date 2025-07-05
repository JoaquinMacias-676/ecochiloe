import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function CrearCuenta({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto Regular': require('./assets/fonts/Roboto-Regular.ttf'),
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

        <Text style={styles.texto_grande}>Crea una cuenta</Text>

        <Text style={styles.texto_normal}>Por medio de un correo electrónico</Text>

        <Pressable style={[styles.botones, { marginTop: 20, flexDirection: 'row' }]}>
          <Icon name='envelope' size={24} color='#d7d7d7' />
          <Text style={[styles.texto_normal, { paddingHorizontal: 40 }]}>Ingrese un correo electrónico</Text>
        </Pressable>

        <Pressable style={[styles.botones, { backgroundColor: '#000', borderColor: '#000'}]}
        onPress={() => navigation.navigate('CrearContraseña')}>
          <Text style={[styles.texto_normal, { color: '#fff'}]}>Continuar</Text> 
        </Pressable>

        <View style={styles.container_gris}>

          <Text style={styles.texto_normal}>¿Ya tienes una cuenta?{' '}
            <Text style={[styles.texto_normal, { color: '#00bf63', textDecorationLine: 'underline', }]}
            onPress={() => navigation.navigate('IniciarSesion')}>
              Inicia sesión</Text>
          </Text>

        </View>

    </View>
  );
}