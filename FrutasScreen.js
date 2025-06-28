import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function Frutas({ navigation }) {
    return (
        <View style={styles.container}>
          <Pressable
            onPress={() => navigation.navigate('SeleccionCultivo')}
            style={styles.flechaboton}>
            <Image
                source={require('./assets/flecha_atras.png')}
                style={[styles.flechaimagen, { tintColor: '#000000'}]}/>
          </Pressable>
            <View style={styles.botones_horizontal_cultivos}>
            <Pressable
                onPress={() => navigation.navigate('')}
                style={({ pressed }) => [ 
                    styles.botones_clasificacion_cultivos,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>???</Text>
                <Image 
                    source={require('./assets/ecochiloe_logo.png')}
                    style={styles.cultivos_iconos} />
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('')}
                style={({ pressed }) => [ 
                    styles.botones_clasificacion_cultivos,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>???</Text>
                <Image
                    source={require('./assets/ecochiloe_logo.png')}
                    style={styles.cultivos_iconos} />
            </Pressable>
            </View>

            <View style={styles.botones_horizontal_cultivos}>
            <Pressable
                onPress={() => navigation.navigate('')}
                style={({ pressed }) => [ 
                    styles.botones_clasificacion_cultivos,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>???</Text>
                <Image
                    source={require('./assets/ecochiloe_logo.png')}
                    style={styles.cultivos_iconos} />
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('')}
                style={({ pressed }) => [ 
                    styles.botones_clasificacion_cultivos,
                    { backgroundColor: pressed ? '#0c7744' : '#78e0af', marginTop: 50 }]}>
                <Text style={styles.papas}>???</Text>
                <Image
                    source={require('./assets/ecochiloe_logo.png')} 
                    style={styles.cultivos_iconos} />
            </Pressable>
            </View>  
        </View>
    );
}