import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function Cereales({ navigation }) {
    return (
        <View style={styles.container}>
          
            <Text style={styles.titulo_interfaz}>MEDICINALES</Text>

            <Pressable
                onPress={() => navigation.navigate('SeleccionCultivo')}
                style={styles.flechaboton}>
                <Image
                    source={require('./assets/flecha_atras.png')}
                    style={[styles.flechaimagen, { tintColor: '#000000'}]}/>
            </Pressable>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoArrayan')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.papas}>Arrayán</Text>
                    <Image 
                        source={require('./assets/ecochiloe_logo.png')}
                        style={styles.cultivos_iconos} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoCanelo')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.papas}>Canelo</Text>
                    <Image
                        source={require('./assets/ecochiloe_logo.png')}
                        style={styles.cultivos_iconos} />
                </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoMatico')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.papas}>Matico</Text>
                    <Image
                        source={require('./assets/ecochiloe_logo.png')}
                        style={styles.cultivos_iconos} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoMichay')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.papas}>Michay</Text>
                    <Image
                        source={require('./assets/ecochiloe_logo.png')} 
                        style={styles.cultivos_iconos} />
                </Pressable>
            </View>  
        </View>
    );
}