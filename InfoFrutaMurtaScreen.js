import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoLechuga({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo_interfaz}>CUIDADOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Frutas')}
        style={styles.flechaboton}>
        <Image
          source={require('./assets/flecha_atras.png')}
          style={[styles.flechaimagen, { tintColor: '#000000' }]}
        />
      </Pressable>

      <View style={[styles.cuadro_de_texto, { height: 495 }]}>
        <Text style={styles.titulo}>La Murta</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se siembra en suelos bien drenados, con algo de materia orgánica.{"\n"}
          -Puede plantarse en hoyos de unos 10-15 cm de profundidad.{"\n"}
          -Mantén una distancia de 1-2 metros entre plantas.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En primavera, entre septiembre y noviembre.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Prefiere suelos ácidos y{"\n"}ligeramente húmedos.{"\n"}
          -Riego moderado, evitando{"\n"}el encharcamiento.{"\n"}
          -Necesita algo de sombra,{"\n"}pero también soporta el{"\n"}sol parcial.
        </Text>

        <Image
          source={{ uri: 'https://www.chileestuyo.cl/wp-content/uploads/2021/04/Murta.jpg' }}
          style={[styles.imagen, { top: 230, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede afectar las raíces.{"\n"}
          -Susceptible a plagas como hongos o insectos.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha en verano, entre enero y febrero, cuando los frutos están maduros y de color rojo o morado.</Text>
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