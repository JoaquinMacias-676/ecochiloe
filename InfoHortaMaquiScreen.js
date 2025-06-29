import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoLechuga({ navigation }) {
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

      <View style={styles.cuadro_de_texto}>
        <Text style={styles.titulo}>Maqui</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se planta por semillas o esquejes.{"\n"}
          -El hoyo debe ser de unos 30 cm de profundidad.{"\n"}
          -Dejar al menos 2 metros entre cada planta.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En primavera, entre septiembre y noviembre.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Suelo bien drenado y algo ácido.{"\n"}
          -Riego moderado, sin encharcar.{"\n"}
          -Tolera el sol, pero también crece en sombra parcial.
        </Text>

        <Image
          source={{ uri: 'https://locotemarket.com/cdn/shop/products/descarga_5_a4670e41-bc2a-4da0-aa14-19e2b06a6781.jpg?v=1620429853&width=259' }}
          style={styles.imagen_papa_bruja}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede afectar las raíces.{"\n"}
          -Plagas menores, como hongos en ambientes muy húmedos.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha en verano, entre enero{"\n"} y marzo, cuando los frutos están bien oscuros.</Text>
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