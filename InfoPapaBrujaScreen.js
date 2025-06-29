import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoPapaBruja({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo_interfaz}>CUIDADOS</Text>
        <Pressable
          onPress={() => navigation.navigate('Tuberculos')}
          style={styles.flechaboton}>
          <Image
              source={require('./assets/flecha_atras.png')}
              style={[styles.flechaimagen, { tintColor: '#000000'}]}/>
        </Pressable>

      <View style={styles.cuadro_de_texto}>

        <Text style={styles.titulo}>PAPA BRUJA</Text>
          
        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>Se corta la papa en pedazos con brotes (ojos) y se entierran en la tierra, a unos 10 cm de profundidad.</Text>
          
        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>Entre Agosto y Octubre, cuando empieza la primavera en Chiloé.</Text>
          
        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Usar tierra suelta y con{"\n"} abono.{"\n"}
          -Regar con poca agua,{"\n"} sin encharcar.{"\n"}
          -Echar tierra al tallo{"\n"} cuando crezca.
        </Text>

        <Image
          source={{ uri: 'https://frutonchile.cl/wp-content/uploads/2019/12/papa-bruja.jpg'}}
          style={styles.imagen_papa_bruja}/>
          
        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Mucha agua puede pudrir la papa.{"\n"}
          -Pueden aparecer gusanos o bichos que dañen el cultivo.
        </Text>
          
        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha después de 3 a 4 meses, cuando se comienza a secar.</Text>
      </View>

      <Pressable
        style={({ pressed }) => [ 
            styles.boton_añadir,
            { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 20 }]}>
        <Text style={styles.texto_boton_añadir}>AGREGAR</Text>
      </Pressable>
    </View>
  );
}