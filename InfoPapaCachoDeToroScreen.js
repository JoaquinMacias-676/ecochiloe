import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoPapaCachoDeToro({ navigation }) {
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
        <Text style={styles.titulo}>PAPA CACHO DE TORO</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se corta en trozos con brotes.{"\n"}
          -Se entierra a 10–15 cm de profundidad.{"\n"}
          -Se deja 30–40 cm entre plantas.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          Entre septiembre y noviembre (primavera).
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Tierra suelta y con abono.{"\n"}
          -Mantener el suelo húmedo.{"\n"}
          -Sacarle las malezas.{"\n"}
          -Agregar tierra en la base{"\n"} cuando va creciendo.
        </Text>

        <Image
          source={{ uri: 'https://locotemarket.com/cdn/shop/products/descarga_5_a4670e41-bc2a-4da0-aa14-19e2b06a6781.jpg?v=1620429853&width=259' }}
          style={[styles.imagen, { top: 180, left: 175 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede pudrir.{"\n"}
          -Plagas: gusanos, escarabajos, pulgones.{"\n"}
          -Frío fuerte en etapas tempranas.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          A los 3–4 meses, cuando la planta de arriba se seca.
        </Text>
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