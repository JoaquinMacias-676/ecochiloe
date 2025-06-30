import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoArrayan({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo_interfaz}>CUIDADOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Medicinales')}
        style={styles.flechaboton}>
        <Image
          source={require('./assets/flecha_atras.png')}
          style={[styles.flechaimagen, { tintColor: '#000000' }]}
        />
      </Pressable>

      <View style={styles.cuadro_de_texto}>
        <Text style={styles.titulo}>Arrayán (Luma apiculata)</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Por semillas o esquejes.{"\n"}
          -Se planta en suelo húmedo{"\n"} y con sombra parcial.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          En otoño o primavera.
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Riego frecuente y buena ventilación.{"\n"}
          -Crece lento pero es muy resistente.
        </Text>

        <Image
          source={{ uri: 'https://www.cincopinos.cl/cdn/shop/products/10a_24pTyd1nnvPQ0vLTQOW7Qil99UaNJ_5000x.jpg?v=1625150582' }}
          style={styles.imagen_papa_bruja}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          Puede ser atacado por hongos{"\n"} si hay mucha humedad.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          Se usan hojas y frutos.
        </Text>

        <Text style={styles.subtitulo}>¿Para qué sirve?</Text>
        <Text style={styles.texto}>
          Ayuda en infecciones de garganta, diarreas{"\n"} y tiene efecto antiséptico.
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
