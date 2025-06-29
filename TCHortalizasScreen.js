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
                <Text style={styles.papas}>Ajo Chilote</Text>
                <Image 
                    source={require('./assets/ecochiloe_logo.png')}
                    style={styles.cultivos_iconos}
                />
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('InfoLechuga')}
                style={({ pressed }) => [ 
                    styles.botones_clasificacion_cultivos,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>Lechuga Criolla Chilota</Text>
                <Image
                    source={require('./assets/ecochiloe_logo.png')}
                    style={styles.cultivos_iconos} />
            </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
                <Pressable
                    onPress={() => navigation.navigate('InfoMaqui')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.papas}>Maqui</Text>
                    <Image
                        source={require('./assets/ecochiloe_logo.png')}
                        style={styles.cultivos_iconos} />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('InfoNalca')}
                    style={({ pressed }) => [ 
                        styles.botones_clasificacion_cultivos,
                        { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                    <Text style={styles.papas}>Nalca</Text>
                <Image
                    source={require('./assets/ecochiloe_logo.png')} 
                    style={styles.cultivos_iconos} />
            </Pressable>
            </View>  
        </View>
    );
}