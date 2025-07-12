import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoPapaBruja({ navigation }) {
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

      <View style={styles.cuadro_de_texto}>

        <Text style={styles.titulo}>PAPA BRUJA</Text>
          
        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>Se corta la papa en pedazos con brotes (ojos) y se entierran a unos 10 cm de profundidad.</Text>
          
        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>Entre Agosto y Octubre, cuando empieza la primavera en Chiloé.</Text>
          
        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Usar tierra suelta y con{"\n"} abono.{"\n"}
          -Regar con poca agua,{"\n"} sin encharcar.{"\n"}
          -Echar tierra al tallo{"\n"} cuando crezca.
        </Text>

        <Image
          source={{ uri: 'https://frutonchile.cl/wp-content/uploads/2019/12/papa-bruja.jpg'}}
          style={styles.imagen}/>
          
        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Mucha agua puede pudrir la papa.{"\n"}
          -Pueden aparecer gusanos o bichos que{"\n"} dañen el cultivo.
        </Text>
          
        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha después de 3 a 4 meses, cuando se comienza a secar.</Text>
      </View>

    </View>
  );
}