import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoMichay({ navigation }) {
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

      <View style={[styles.cuadro_de_texto, { height: 440 }]}>
        <Text style={styles.titulo}>Michay (Berberis darwinii)</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Por semillas o ramitas con raíz.{"\n"}
          -Se adapta bien a suelos ácidos.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          En primavera.
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Necesita sol directo.{"\n"}
          -Poca agua y poco abono.
        </Text>

        <Image
          source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmJWEfDAQ4ZqgVBhPUwKJbVa0OVb-frznM9julhO8tWwC20wou3nXvpE9_l5se612TvYtubqmoqRkBUREQ5ivPKHV-GRB4Effjg3cVpHFht2m8nE2RwJmTTxWPGgtrNjEbfO6_8nnN_tA/s1600/DSC_0177.JPG' }}
          style={[styles.imagen, { top: 260, left: 180, width: 100, height: 100 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Espinas molestas al{"\n"} manipular.{"\n"}
          -Lento crecimiento.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          Se usan los frutos (bayas).
        </Text>

        <Text style={styles.subtitulo}>¿Para qué sirve?</Text>
        <Text style={styles.texto}>
          Sus frutos ayudan al sistema digestivo{"\n"}y tienen alto valor antioxidante.
        </Text>
      </View>

    </View>
  );
}
