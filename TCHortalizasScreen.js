import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function Tuberculos({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo_interfaz}>HORTALIZAS</Text>

            <Pressable
                onPress={() => navigation.navigate('SeleccionCultivo')}
                style={styles.flechaboton}>
                <Image
                    source={require('./assets/flecha_atras.png')}
                    style={[styles.flechaimagen, { tintColor: '#000000'}]}/>
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
                    style={[styles.cultivos_iconos, { width: 110, height: 110, top: -10 }]} />
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
                    style={styles.cultivos_iconos} />
            </Pressable>
            </View>  
        </View>
    );
}