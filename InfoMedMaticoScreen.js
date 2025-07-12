import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoMatico({ navigation }) {
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
        onPress={() => navigation.navigate('Medicinales')}
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

      <View style={[styles.cuadro_de_texto, { height: 420 }]}>
        <Text style={styles.titulo}>Matico (Buddleja globosa)</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Por esquejes (ramas cortadas) o semillas.{"\n"}
          -Se adapta bien a distintos tipos de suelo.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          En primavera u otoño.
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Poca agua, crece bien en{"\n"} zonas soleadas.{"\n"}
          -No necesita mucho abono.
        </Text>

        <Image
          source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_784819-MLC78074223926_082024-O.webp' }}
          style={[styles.imagen, { top: 130, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Sensible al exceso de agua.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          Se recolectan las hojas y flores.
        </Text>

        <Text style={styles.subtitulo}>¿Para qué sirve?</Text>
        <Text style={styles.texto}>
          Es cicatrizante natural, se usa para{"\n"}heridas, quemaduras y malestares estomacales.
        </Text>
      </View>

    </View>
  );
}
