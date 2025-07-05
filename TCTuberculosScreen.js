import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function Tuberculos({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Baloo 2 Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }
  
    return (
        <View style={styles.container}>

            <Text style={styles.titulo_interfaz}>TUBÉRCULOS</Text>

            <Pressable
                onPress={() => navigation.navigate('SeleccionCultivo')}
                style={{
                    position: 'absolute',
                    top: 83,
                    left: 30,
                }}>
                <Icon name='caret-left' size={25} color="#fff" style={{ zIndex: 1 }}/>
                <Icon name='caret-left' size={55} color="#000" style={{
                    top: -40,
                    right: 6.5,
                    zIndex: 0,
                }} />
            </Pressable>
            
            <View style={styles.botones_horizontal_cultivos}>
            <Pressable
                onPress={() => navigation.navigate('InfoPapaBruja')}
                style={({ pressed }) => [ 
                    styles.botones_clasificacion_cultivos,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.icono_texto}>Papa Bruja</Text>
                <Image 
                    source={require('./assets/papa_bruja.png')}
                    style={[styles.cultivos_iconos, { top: -5} ]}
                />
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('InfoPapaRoja')}
                style={({ pressed }) => [ 
                    styles.botones_clasificacion_cultivos,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.icono_texto}>Papa Roja</Text>
                <Image
                    source={require('./assets/papa_roja.png')}
                    style={[styles.cultivos_iconos, { top: -20, width: 150, height: 150 }]} />
            </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoPapaClavelaOjona')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Papa Clavela Ojona</Text>
                    <Image
                        source={require('./assets/papa_clavela_ojona.png')}
                        style={[styles.cultivos_iconos, { top: -20 }]} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoPapaCachoDeToro')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Papa Cacho de Toro</Text>
                <Image
                    source={require('./assets/papa_cacho_de_toro.png')} 
                    style={[styles.cultivos_iconos, { top: -25, transform: [{ rotate: '10deg'}] }]} />
            </Pressable>
            </View>  
        </View>
    );
}