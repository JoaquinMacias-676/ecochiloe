import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoAjo({ navigation }) {
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

      <View style={[styles.cuadro_de_texto, { height: 485 }]}>
        <Text style={styles.titulo}>AJO CHILOTE</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se planta el diente de ajo (no la cabeza entera).{"\n"}
          -Se entierra con la punta hacia arriba, a unos 3-5 cm de profundidad.{"\n"}
          -Dejar 10-15 cm de distancia entre cada planta.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En otoño, entre abril y junio.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Suelo suelto, bien drenado y con buena materia orgánica.{"\n"}
          -Riego moderado, evitando el exceso de agua.{"\n"}
          -Mantener libre de malezas.
        </Text>

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede{"\n"} pudrir los bulbos.{"\n"}
          -Enfermedades por hongos{"\n"} si el suelo está muy húmedo.{"\n"}
          -Algunas plagas como{"\n"} gusanos o trips.
        </Text>

        <Image
          source={{ uri: 'https://www.portalagrochile.cl/wp-content/uploads/2025/04/SAG-Los-Lagos-certifica-semilla-de-ajo-chilote-y-destaca-esfuerzo-de-productoresas-de-Chiloe-696x458.jpg' }}
          style={styles.imagen_ajo}
        />

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha a los 6-8 meses, cuando las hojas comienzan a secarse.</Text>
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