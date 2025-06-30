import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoMatico({ navigation }) {
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

      <View style={[styles.cuadro_de_texto, { height: 420 }]}>
        <Text style={styles.titulo}>Matico (Buddleja globosa)</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Por esquejes (ramas cortadas) o semillas.{"\n"}
          -Se adapta bien a distintos tipos de suelo.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>
          En primavera u otoño.
        </Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Poca agua, crece bien en{"\n"} zonas soleadas.{"\n"}
          -No necesita mucho abono.
        </Text>

        <Image
          source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_784819-MLC78074223926_082024-O.webp' }}
          style={[styles.imagen, { top: 130, left: 180 }]}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Sensible al exceso de agua.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>
          Se recolectan las hojas y flores.
        </Text>

        <Text style={styles.subtitulo}>¿Para qué sirve?</Text>
        <Text style={styles.texto}>
          Es cicatrizante natural, se usa para{"\n"} heridas, quemaduras y malestares estomacales.
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
