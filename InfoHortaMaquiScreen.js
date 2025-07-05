import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoMaqui({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Baloo 2 Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
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

  return (
    <View style={styles.container}>
      <Text style={styles.titulo_interfaz}>CUIDADOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Hortalizas')}
        style={{
          position: 'absolute',
          top: 83,
          left: 30,
        }}>
        <Icon name='caret-left' size={25} color="#fff" style={{ zIndex: 1 }}/>
        <Icon name='caret-left' size={55} color="#000" style={{
          top: -40,
          right: 6.5,
          zIndex: 0,
        }} />
      </Pressable>

      <View style={[styles.cuadro_de_texto, { height: 455 }]}>
        <Text style={styles.titulo}>Maqui</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se planta por semillas o esquejes.{"\n"}
          -El hoyo debe ser de unos 30 cm de profundidad.{"\n"}
          -Dejar al menos 2 metros entre cada planta.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En primavera, entre septiembre y noviembre.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Suelo bien drenado y algo ácido.{"\n"}
          -Riego moderado, sin encharcar.{"\n"}
          -Tolera el sol, pero también crece en sombra parcial.
        </Text>

        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Maqui_chileno.jpg/250px-Maqui_chileno.jpg' }}
          style={[styles.imagen, { top: 295, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede{"\n"} afectar a las raíces.{"\n"}
          -Plagas menores, como{"\n"} hongos en ambientes{"\n"} muy húmedos.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha en verano, entre enero{"\n"}y marzo, cuando los frutos están bien oscuros.</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton_añadir,
          { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 20 },
        ]}>
        <Text style={styles.texto_boton_añadir}>AGREGAR</Text>
      </Pressable>
    </View>
  );
}