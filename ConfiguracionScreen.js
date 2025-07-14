import { View, Text, Pressable, Alert } from 'react-native';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

import * as FileSystem from 'expo-file-system';

export default function Configuracion({ navigation }) {
    const cerrarSesion = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'IniciarSesion' }],
    });
  };

// Para eliminar todos los datos del json
const eliminarTodosLosDatos = async () => {
  try {
    const fileUri = FileSystem.documentDirectory + 'cuentas.json';
    
    const fileExists = await FileSystem.getInfoAsync(fileUri);
    if (!fileExists.exists) {
      Alert.alert('Aviso', 'El archivo ya está vacío o no existe.');
      return;
    }

    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify([]));
    Alert.alert('Éxito', 'Todos los datos han sido eliminados.');
  } catch (error) {
    console.error('Error al eliminar los datos:', error);
    Alert.alert('Error', 'Ocurrió un error al intentar eliminar los datos.');
  }
};

  return (
    <View style={styles.container}>
        <Text style={[styles.textocolor, { paddingBottom: 120 }]}>CONFIGURACIÓN</Text>
        <Pressable
            style={styles.boton_configuracion}
            onPress={cerrarSesion}>
            <FontAwesome5 name='sign-out-alt' size={25} color='white' style={{ paddingLeft: 20}} />
            <Text style={styles.texto_configuracion}>Cerrar sesión</Text>
        </Pressable>
        <Pressable
          style={[styles.boton_configuracion, { borderBottomWidth: 4, borderBottomColor: '#0c7744' }]}
          onPress={eliminarTodosLosDatos}>
          <FontAwesome5 name='exclamation-triangle' size={23} color='white' style={{ paddingLeft: 20 }} />
          <Text style={styles.texto_configuracion}>Eliminar todos los datos</Text>
        </Pressable>
    </View>
  );
}
