import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoNalca({ navigation }) {
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

      <View style={[styles.cuadro_de_texto, { height: 425 }]}>
        <Text style={styles.titulo}>Nalca</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se siembra en un hoyo profundo (al menos 30 cm).{"\n"}
          -Coloca la raíz en el fondo y cúbrela con tierra.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En primavera, entre septiembre y noviembre.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Prefiere suelos ricos y húmedos.{"\n"}
          -Riego constante, evitando que se seque.{"\n"}
          -Necesita sombra parcial.
        </Text>

        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gunnera_tinctoria_7.jpg/250px-Gunnera_tinctoria_7.jpg' }}
          style={[styles.imagen, { top: 280, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede{"\n"} pudrir la planta.{"\n"}
          -Plagas como caracoles{"\n"} y babosas.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha en 6-8 meses,{"\n"}cuando los tallos están gruesos y rojos.</Text>
      </View>

    </View>
  );
}