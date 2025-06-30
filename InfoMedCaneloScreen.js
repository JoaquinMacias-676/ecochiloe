import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoCanelo({ navigation }) {
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
        <Text style={styles.titulo}>Canelo (Drimys winteri)</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Por semillas o brotes jóvenes.{"\n"}
          -Se planta en suelo húmedo{"\n"} y con sombra parcial.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          A comienzos de otoño o en primavera.
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Requiere riego frecuente.{"\n"}
          -Crece mejor en climas lluviosos{"\n"} como el de Chiloé.
        </Text>

        <Image
          source={{ uri: 'https://www.gochile.cl/fotos/full/63171-canelo-james-gaither@2x.jpg' }}
          style={styles.imagen_papa_bruja}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -No soporta sequía prolongada.{"\n"}
          -Puede ser atacado por hongos{"\n"} si no tiene buena ventilación.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          Se usan principalmente las hojas y corteza.
        </Text>

        <Text style={styles.subtitulo}>¿Para qué sirve?</Text>
        <Text style={styles.texto}>
          Alivia problemas respiratorios, dolores estomacales{"\n"} y se usa en limpias o ceremonias mapuche.
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
