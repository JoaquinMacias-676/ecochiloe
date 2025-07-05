import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function Hortalizas({ navigation }) {
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

            <Text style={styles.titulo_interfaz}>HORTALIZAS</Text>

            <Pressable
                onPress={() => navigation.navigate('SeleccionCultivo')}
                style={{
                    position: 'absolute',
                    top: 120,
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
                    onPress={() => navigation.navigate('InfoAjo')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Ajo Chilote</Text>
                    <Image 
                        source={require('./assets/ajo_chilote.png')}
                        style={[styles.cultivos_iconos, { width: 150, height: 150, top: -20 }]}
                    />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoLechuga')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Lechuga Criolla Chilota</Text>
                    <Image
                        source={require('./assets/lechuga.png')}
                        style={[styles.cultivos_iconos, { width: 110, height: 110, top: -20 }]} />
                </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoMaqui')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Maqui</Text>
                    <Image
                        source={require('./assets/maqui.png')}
                        style={styles.cultivos_iconos} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoNalca')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Nalca</Text>
                    <Image
                        source={require('./assets/nalca.png')} 
                        style={[styles.cultivos_iconos, { top: -10}]} />
                </Pressable>
            </View>  
        </View>
    );
}