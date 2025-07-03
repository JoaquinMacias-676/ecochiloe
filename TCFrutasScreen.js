import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';

export default function Frutas({ navigation }) {
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

            <Text style={styles.titulo_interfaz}>FRUTAS</Text>
            
            <Pressable
                onPress={() => navigation.navigate('SeleccionCultivo')}
                style={styles.flechaboton}>
                <Image
                    source={require('./assets/flecha_atras.png')}
                    style={[styles.flechaimagen, { tintColor: '#000000'}]}/>
            </Pressable>
            
            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoChilco')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Chilco</Text>
                    <Image 
                        source={require('./assets/chilco.png')}
                        style={[styles.cultivos_iconos, { width: 175, height: 175, top: -25}]} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoFrutilla')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Frutilla Blanca</Text>
                    <Image
                        source={require('./assets/frutilla_blanca.png')}
                        style={[styles.cultivos_iconos, { width: 175, height: 175, top: -25}]} />
                </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoMurta')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Murta</Text>
                    <Image
                        source={require('./assets/murta.png')}
                        style={[styles.cultivos_iconos, { width: 175, height: 175, top: -25}]} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoZarzaparrilla')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Zarzaparrilla</Text>
                    <Image
                        source={require('./assets/zarzaparrilla.png')} 
                        style={styles.cultivos_iconos} />
                </Pressable>
            </View>  
        </View>
    );
}