import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoLechuga({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo_interfaz}>CUIDADOS</Text>

      <Pressable
        onPress={() => navigation.navigate('Cereales')}
        style={styles.flechaboton}>
        <Image
          source={require('./assets/flecha_atras.png')}
          style={[styles.flechaimagen, { tintColor: '#000000' }]}
        />
      </Pressable>

      <View style={styles.cuadro_de_texto}>
        <Text style={styles.titulo}>Huequén (Trigo criollo)</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>Por semillas, esparcidas o en hileras.</Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>A fines de otoño o principios de invierno.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -No necesita muchos cuidados, es muy resistente.{"\n"}
          -Se adapta bien a suelos pobres y clima frío.
        </Text>

        <Image
          source={{ uri: 'https://locotemarket.com/cdn/shop/products/descarga_5_a4670e41-bc2a-4da0-aa14-19e2b06a6781.jpg?v=1620429853&width=259' }}
          style={styles.imagen_papa_bruja}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Lluvias excesivas pueden afectar la cosecha.{"\n"}
          -Puede ser afectado por hongos si hay demasiada humedad.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>A comienzos del verano siguiente, cuando las espigas están secas.</Text>
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