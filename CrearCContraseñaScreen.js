import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function CrearCuentaContraseña({ navigation }) {
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

      <Pressable
        onPress={() => navigation.navigate('CrearCuenta')}
        style={{
          position: 'absolute',
          top: 60,
          left: 30,
        }}>
        <Icon name='caret-left' size={25} color="#fff" style={{ zIndex: 1 }}/>
        <Icon name='caret-left' size={55} color="#000" style={{
          top: -40,
          right: 6.5,
          zIndex: 0,
        }} />
      </Pressable>

        <Image
          source={require('./assets/ecochiloe_3.png')}
          style={styles.logo_estilo} />

        <Text style={styles.texto_grande}>Crea una contraseña</Text>

        <Text style={styles.texto_normal}>Crea una contraseña para tu cuenta</Text>

        <Pressable style={[styles.botones, { marginTop: 20, flexDirection: 'row' }]}>
          <Icon name='lock' size={30} color='#d7d7d7' />
          <Text style={[styles.texto_normal, { paddingHorizontal: 60 }]}>Ingrese una contraseña</Text>
        </Pressable>

        <Pressable style={[styles.botones, { backgroundColor: '#000', borderColor: '#000'}]}
        onPress={() => navigation.navigate('AgregarNombre')}>
          <Text style={[styles.texto_normal, { color: '#fff'}]}>Continuar</Text> 
        </Pressable>

    </View>
  );
}