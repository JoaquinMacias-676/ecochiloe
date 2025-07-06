import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoMurta({ navigation }) {
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
        onPress={() => navigation.navigate('Frutas')}
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

      <View style={[styles.cuadro_de_texto, { height: 495 }]}>
        <Text style={styles.titulo}>La Murta</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se siembra en suelos bien drenados, con algo de{"\n"} materia orgánica.{"\n"}
          -Puede plantarse en hoyos de unos 10-15 cm de{"\n"} profundidad.{"\n"}
          -Mantén una distancia de 1-2 metros entre plantas.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En primavera, entre septiembre y noviembre.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Prefiere suelos ácidos y{"\n"} ligeramente húmedos.{"\n"}
          -Riego moderado, evitando{"\n"} el encharcamiento.{"\n"}
          -Necesita algo de sombra,{"\n"} pero también soporta el{"\n"} sol parcial.
        </Text>

        <Image
          source={{ uri: 'https://www.chileestuyo.cl/wp-content/uploads/2021/04/Murta.jpg' }}
          style={[styles.imagen, { top: 230, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede afectar las raíces.{"\n"}
          -Susceptible a plagas como hongos o insectos.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha en verano, entre enero y febrero, cuando los frutos están maduros y de color rojo o morado.</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton_añadir,
          { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 20 },
        ]}>
        <Text style={styles.texto_boton_añadir}>AÑADIR</Text>
      </Pressable>
    </View>
  );
}