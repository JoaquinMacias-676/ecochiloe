import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoPapaClavelaOjona({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo_interfaz}>CUIDADOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Tuberculos')}
        style={styles.flechaboton}>
        <Image
          source={require('./assets/flecha_atras.png')}
          style={[styles.flechaimagen, { tintColor: '#000000' }]}
        />
      </Pressable>

      <View style={[styles.cuadro_de_texto, { height: 435 }]}>
        <Text style={styles.titulo}>PAPA CLAVELA OJONA</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se corta en trozos con al menos un brote.{"\n"}
          -Se entierra a 10–15 cm de profundidad.{"\n"}
          -Se deja 30–40 cm de distancia entre plantas.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          Entre septiembre y noviembre (primavera).
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Tierra suelta y abonada.{"\n"}
          -Riego moderado.{"\n"}
          -Limpiar malezas y{"\n"} echarle tierra en la base{"\n"} cuando vaya creciendo.
        </Text>

        <Image
          source={{ uri: 'https://www.museodeancud.gob.cl/sites/www.museodeancud.gob.cl/files/2021-04/11%20FIG%2011%20_MG_2779.jpg' }}
          style={[styles.imagen, { top: 180, left: 175 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede pudrir.{"\n"}
          -Plagas como gusanos, pulgones{"\n"} y escarabajos.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          Después de 3 a 4 meses, cuando la planta se seca arriba.
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
