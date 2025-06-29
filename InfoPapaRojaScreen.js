import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles_info';

export default function InfoPapaRoja({ navigation }) {
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

      <View style={styles.cuadro_de_texto_papa_roja}>

        <Text style={styles.titulo}>PAPA ROJA</Text>
          
        <Text style={styles.subtitulo}>¿Cómo se planta?</Text>
        <Text style={styles.texto}>Se corta en trozos con al menos un “ojo” (brote) y se entierra en la tierra a unos 10–15 cm de profundidad.</Text>
          
        <Text style={styles.subtitulo}>¿Cuándo plantar?</Text>
        <Text style={styles.texto}>Entre agosto y octubre, aprovechando la primavera chilota.</Text>
          
        <Text style={styles.subtitulo}>Cuidados básicos</Text>
        <Text style={styles.texto}>
          -Tierra suelta, con buen{"\n"} abono natural.{"\n"}
          -Riego moderado, evitando{"\n"} que el suelo quede muy{"\n"} mojado.{"\n"}
          -Ir echando tierra al tallo{"\n"} a medida que crece.
        </Text>

        <Image
          source={{ uri: 'https://tienda.frutaseloy.com/wp-content/uploads/2024/11/variedad-de-patata-roja-425x495.png.webp'}}
          style={styles.imagen_papa_roja}/>
          
        <Text style={styles.subtitulo}>Riesgos a tener en cuenta</Text>
        <Text style={styles.texto}>
          -Exceso de agua puede hacer que se pudran.{"\n"}
          -Plagas como gusanos blancos o pulgones pueden afectarla.
        </Text>
          
        <Text style={styles.subtitulo}>Cosecha</Text>
        <Text style={styles.texto}>Se cosecha a los 3 o 4 meses, cuando la planta se seca en la parte de arriba.</Text>
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