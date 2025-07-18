import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoFrutilla({ navigation }) {
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

      <View style={styles.cuadro_de_texto}>
        <Text style={styles.titulo}>Frutilla Blanca</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se planta por estolones (ramitas que salen de la{"\n"} planta madre).{"\n"}
          -Se entierra la parte con raíces en tierra suelta y{"\n"} húmeda.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En otoño o primavera.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Lugar con sol parcial.{"\n"}
          -Suelo húmedo, sin{"\n"} encharcar.{"\n"}
          -Sacar malezas que{"\n"} compitan con la planta.
        </Text>

        <Image
          source={{ uri: 'https://www.utalca.cl/content/uploads/2019/04/frutilla_blanca_utalca.jpg' }}
          style={[styles.imagen, { width: 110, height: 110, top: 160, left: 160 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Plagas como babosas o hongos si hay{"\n"} demasiada humedad.{"\n"}
          -Frío extremo puede dañar brotes jóvenes.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>A los 3-4 meses, cuando el fruto{"\n"}está blanco con tono rosado y aromático.</Text>
      </View>

    </View>
  );
}