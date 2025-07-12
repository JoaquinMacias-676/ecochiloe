import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoPapaClavelaOjona({ navigation }) {
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
        onPress={() => navigation.navigate('Tuberculos')}
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

      <View style={[styles.cuadro_de_texto, { height: 435 }]}>
        <Text style={styles.titulo}>PAPA CLAVELA OJONA</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se corta en trozos con al menos un brote.{"\n"}
          -Se entierra a 10–15 cm de profundidad.{"\n"}
          -Se deja 30–40 cm de distancia entre plantas.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          Entre septiembre y noviembre (primavera).
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Tierra suelta y abonada.{"\n"}
          -Riego moderado.{"\n"}
          -Limpiar malezas y{"\n"} echarle tierra en la base{"\n"} cuando vaya creciendo.
        </Text>

        <Image
          source={{ uri: 'https://www.museodeancud.gob.cl/sites/www.museodeancud.gob.cl/files/2021-04/11%20FIG%2011%20_MG_2779.jpg' }}
          style={[styles.imagen, { top: 180, left: 175 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede pudrir.{"\n"}
          -Plagas como gusanos, pulgones{"\n"} y escarabajos.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          Después de 3 a 4 meses, cuando la planta se seca arriba.
        </Text>
      </View>

    </View>
  );
}
