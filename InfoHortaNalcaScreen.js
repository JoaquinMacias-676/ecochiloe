import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import { useFonts } from 'expo-font';

export default function InfoNalca({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Baloo 2 Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
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

  return (
    <View style={styles.container}>
      <Text style={styles.titulo_interfaz}>CUIDADOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Hortalizas')}
        style={styles.flechaboton}>
        <Image
          source={require('./assets/flecha_atras.png')}
          style={[styles.flechaimagen, { tintColor: '#000000' }]}
        />
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
          style={[styles.imagen, { top: 270, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede{"\n"} pudrir la planta.{"\n"}
          -Plagas como caracoles{"\n"} y babosas.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha en 6-8 meses,{"\n"}cuando los tallos están gruesos y rojos.</Text>
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