import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function Cereales({ navigation }) {
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
          
            <Text style={styles.titulo_interfaz}>MEDICINALES</Text>

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
                    onPress={() => navigation.navigate('InfoArrayan')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Arrayán</Text>
                    <Image 
                        source={require('./assets/arrayan.png')}
                        style={[styles.cultivos_iconos, { top: -15, width: 135, height: 135 }]} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoCanelo')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Canelo</Text>
                    <Image
                        source={require('./assets/canelo.png')}
                        style={[styles.cultivos_iconos, { top: -20, width: 145, height: 145 }]} />
                </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoMatico')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Matico</Text>
                    <Image
                        source={require('./assets/ecochiloe_logo.png')}
                        style={styles.cultivos_iconos} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoMichay')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Michay</Text>
                    <Image
                        source={require('./assets/ecochiloe_logo.png')} 
                        style={styles.cultivos_iconos} />
                </Pressable>
            </View>  
        </View>
    );
}