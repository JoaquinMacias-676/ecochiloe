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

      <View style={[styles.cuadro_de_texto, { height: 412 }]}>
        <Text style={styles.titulo}>Zarzaparrilla</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Por estacas (trozos de tallo con nudos).{"\n"}
          -Se planta en suelo húmedo y rico en nutrientes.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En otoño o primavera.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Necesita sombra parcial y riego constante.{"\n"}
          -Puede crecer como enredadera.
        </Text>

        <Image
          source={{ uri: 'https://www.portalagrochile.cl/wp-content/uploads/2024/02/SAG-Los-Lagos-certifica-envio-de-zarzaparrilla-roja-a-Europa-1.jpg' }}
          style={styles.imagen_zarzaparrilla}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Malezas cercanas pueden{"\n"}robarle nutrientes.{"\n"}
          -Exceso de sol puede hacer{"\n"}que se sequé.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>En verano, cuando da{"\n"}pequeñas bayas oscuras (También{"\n"}se puede usar su raíz).</Text>
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