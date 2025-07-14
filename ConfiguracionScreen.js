import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

export default function Configuracion({ navigation }) {
  const cerrarSesion = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'IniciarSesion' }],
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.boton_configuracion}
        onPress={cerrarSesion}>
        <Text style={styles.texto_configuracion}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}
