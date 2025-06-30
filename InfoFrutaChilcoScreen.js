import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoChilco({ navigation }) {
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

      <View style={[styles.cuadro_de_texto, { height: 415 }]}>
        <Text style={styles.titulo}>Chilco</Text>

        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>
          -Por esquejes o brotes.{"\n"}
          -Se planta en tierra húmeda, en zonas con sombra o sol suave.
        </Text>

        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>En otoño o principios de primavera.</Text>

        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Riego frecuente, pero sin encharcar.{"\n"}
          -Podar si se pone muy grande.
        </Text>

        <Image
          source={{ uri: 'https://laderasur.com/wp-content/uploads/2018/10/chilco10.jpg' }}
          style={styles.imagen_chilco}
        />

        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -No resiste sequías largas.{"\n"}
          -Puede ser atacado por{"\n"} hongos si no hay buen aire.
        </Text>

        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Da frutos en verano. Son{"\n"}morados, pequeños y{"\n"}comestibles.</Text>
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