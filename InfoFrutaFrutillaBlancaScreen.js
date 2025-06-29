import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoFrutilla({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo_interfaz}>titulogrande</Text>

      <Pressable
        onPress={() => navigation.navigate('SeleccionCultivo')}
        style={styles.flechaboton}>
        <Image
          source={require('./assets/flecha_atras.png')}
          style={[styles.flechaimagen, { tintColor: '#000000' }]}
        />
      </Pressable>

      <View style={styles.cuadro_de_texto}>
        <Text style={styles.titulo}>titulo</Text>

        <Text style={styles.subtitulo}>subtitulo</Text>
        <Text style={styles.texto}>texto</Text>

        <Text style={styles.subtitulo}>subtitulo</Text>
        <Text style={styles.texto}>texto</Text>

        <Text style={styles.subtitulo}>subtitulo</Text>
        <Text style={styles.texto}>texto</Text>

        <Image
          source={{ uri: 'https://locotemarket.com/cdn/shop/products/descarga_5_a4670e41-bc2a-4da0-aa14-19e2b06a6781.jpg?v=1620429853&width=259' }}
          style={styles.imagen_papa_bruja}
        />

        <Text style={styles.subtitulo}>subtitulo</Text>
        <Text style={styles.texto}>texto</Text>

        <Text style={styles.subtitulo}>subtitulo</Text>
        <Text style={styles.texto}>texto</Text>
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