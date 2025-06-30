import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function Tuberculos({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo_interfaz}>TUBÉRCULOS</Text>

            <Pressable
                onPress={() => navigation.navigate('SeleccionCultivo')}
                style={styles.flechaboton}>
                <Image
                    source={require('./assets/flecha_atras.png')}
                    style={[styles.flechaimagen, { tintColor: '#000000'}]}/>
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
                    style={styles.cultivos_iconos}
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
                    style={styles.cultivos_iconos} />
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
                        style={styles.cultivos_iconos} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoPapaCachoDeToro')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.icono_texto}>Papa Cacho de Toro</Text>
                <Image
                    source={require('./assets/papa_cacho_de_toro.png')} 
                    style={styles.cultivos_iconos} />
            </Pressable>
            </View>  
        </View>
    );
}