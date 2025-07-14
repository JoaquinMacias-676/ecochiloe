import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function Frutas({ navigation }) {
  const [fuentesCargadas] = useFonts({
    'Baloo 2 Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fuentesCargadas) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo_interfaz}>FRUTAS</Text>
            
            <Pressable
                onPress={() => navigation.navigate('Tabs')}
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
                    onPress={() => navigation.navigate('InfoChilco')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos, {
                            backgroundColor: pressed ? '#0c7744' : '#78e0af',
                            borderColor: pressed ? '#78e0af' : '#136c42',
                            marginTop: 50
                        }]}>
                    <Text style={styles.icono_texto}>Chilco</Text>
                    <Image 
                        source={require('./assets/chilco.png')}
                        style={[styles.cultivos_iconos, { width: 175, height: 175, top: -25}]}
                    />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoFrutilla')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos, {
                            backgroundColor: pressed ? '#0c7744' : '#78e0af',
                            borderColor: pressed ? '#78e0af' : '#136c42',
                            marginTop: 50
                        }]}>
                    <Text style={styles.icono_texto}>Frutilla Blanca</Text>
                    <Image
                        source={require('./assets/frutilla_blanca.png')}
                        style={[styles.cultivos_iconos, { width: 175, height: 175, top: -25}]}
                    />
                </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoMurta')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos, {
                            backgroundColor: pressed ? '#0c7744' : '#78e0af',
                            borderColor: pressed ? '#78e0af' : '#136c42',
                            marginTop: 50
                        }]}>
                    <Text style={styles.icono_texto}>Murta</Text>
                    <Image
                        source={require('./assets/murta.png')}
                        style={[styles.cultivos_iconos, { width: 175, height: 175, top: -25}]}
                    />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoZarzaparrilla')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos, {
                            backgroundColor: pressed ? '#0c7744' : '#78e0af',
                            borderColor: pressed ? '#78e0af' : '#136c42',
                            marginTop: 50
                        }]}>
                    <Text style={styles.icono_texto}>Zarzaparrilla</Text>
                    <Image
                        source={require('./assets/zarzaparrilla.png')} 
                        style={[styles.cultivos_iconos, { top: -5 }]}
                    />
                </Pressable>
            </View>  
        </View>
    );
}