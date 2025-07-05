import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoLechuga({ navigation }) {
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

      <View style={[styles.cuadro_de_texto, { height: 415 }]}>
        <Text style={styles.titulo}>Lechuga Criolla Chilota</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Siembra las semillas a 1 cm de profundidad.{"\n"}
          -Mantén 20-30 cm entre cada planta.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En primavera, entre octubre y noviembre.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Suelo bien drenado.{"\n"}
          -Riego moderado, sin encharcar.{"\n"}
          -Necesita luz solar directa.
        </Text>

        <Image
          source={{ uri: 'https://i0.wp.com/dinkos-semillas.com/wp-content/uploads/2018/04/lechuga_criolla.jpg?w=377&ssl=1' }}
          style={[styles.imagen, { top: 270, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede{"\n"} pudrir las raíces.{"\n"}
          -Plagas como pulgones{"\n"} y caracoles.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha en 60-70 días,{"\n"}cuando las hojas están grandes.</Text>
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