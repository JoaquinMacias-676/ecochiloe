import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_info';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function InfoPapaRoja({ navigation }) {
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

      <View style={[styles.cuadro_de_texto, { height: 475 }]}>

        <Text style={styles.titulo}>PAPA ROJA</Text>
          
        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>Se corta en trozos con al menos un “ojo” (brote) y se entierra en la tierra a unos 10–15 cm de profundidad.</Text>
          
        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>Entre agosto y octubre, aprovechando la primavera chilota.</Text>
          
        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Tierra suelta, con buen{"\n"} abono natural.{"\n"}
          -Riego moderado, evitando{"\n"} que el suelo quede muy{"\n"} mojado.{"\n"}
          -Ir echando tierra al tallo{"\n"} a medida que crece.
        </Text>

        <Image
          source={{ uri: 'https://tienda.frutaseloy.com/wp-content/uploads/2024/11/variedad-de-patata-roja-425x495.png.webp'}}
          style={[styles.imagen, { top: 210, left: 175 }]}
        />
          
        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede hacer que se pudran.{"\n"}
          -Plagas como gusanos blancos o pulgones{"\n"} pueden afectarla.
        </Text>
          
        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha a los 3 o 4 meses, cuando la planta se seca en la parte de arriba.</Text>
      </View>

      <Pressable
        style={({ pressed }) => [ 
            styles.boton_añadir,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 20 }]}>
        <Text style={styles.texto_boton_añadir}>AGREGAR</Text>
      </Pressable>
    </View>
  );
}
