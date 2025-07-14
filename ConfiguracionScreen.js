import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

export default function Configuracion({ navigation }) {
    const cerrarSesion = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'IniciarSesion' }],
    });
  };

  return (
    <View style={styles.container}>
        <Text style={[styles.textocolor, { paddingBottom: 100 }]}>CONFIGURACIÓN</Text>
        <Pressable
            style={[styles.boton_configuracion, { borderBottomWidth: 4, borderBottomColor: '#0c7744' }]}
            onPress={cerrarSesion}>
            <FontAwesome5 name= 'sign-out-alt' size={25} color='white' solid style={{ paddingLeft: 20}} />
            <Text style={styles.texto_configuracion}>Cerrar sesión</Text>
        </Pressable>
    </View>
  );
}
