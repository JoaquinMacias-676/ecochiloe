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

      <View style={[styles.cuadro_de_texto, { height: 435 }]}>
        <Text style={styles.titulo}>Frutilla Blanca</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Se planta por estolones (ramitas que salen de la planta madre).{"\n"}
          -Se entierra la parte con raíces en tierra suelta y húmeda.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En otoño o primavera.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Lugar con sol parcial.{"\n"}
          -Suelo húmedo, sin encharcar.{"\n"}
          -Sacar malezas que{"\n"}compitan con la planta.
        </Text>

        <Image
          source={{ uri: 'https://www.utalca.cl/content/uploads/2019/04/frutilla_blanca_utalca.jpg' }}
          style={styles.imagen_frutilla}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Plagas como babosas o hongos si hay demasiada humedad.{"\n"}
          -Frío extremo puede dañar brotes jóvenes.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>A los 3-4 meses, cuando el fruto{"\n"} está blanco con tono rosado y aromático.</Text>
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