import { Text, View, Pressable, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './styles_login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

import Reacr, { useState } from 'react'
import * as FileSystem from 'expo-file-system';

export default function AgregarNombre({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  const guardarNombreApellido = async () => {
    if (!nombre.trim() || !apellido.trim()) {
      Alert.alert('Campos incompletos', 'Por favor, ingrese su nombre y apellido.');
      return;
    }

    try {
      const fileUri = FileSystem.documentDirectory + 'cuentas.json';

      const fileExists = await FileSystem.getInfoAsync(fileUri);
      if (!fileExists.exists) {
        Alert.alert('Error', 'No se encontró una cuenta para agregar el nombre.');
        return;
      }

      const fileContents = await FileSystem.readAsStringAsync(fileUri);
      const existingData = JSON.parse(fileContents);

      if (existingData.length === 0) {
        Alert.alert('Error', 'No hay datos de cuenta registrados.');
        return;
      }

      const ultimaCuenta = existingData[existingData.length - 1];
      ultimaCuenta.nombre = nombre;
      ultimaCuenta.apellido = apellido;

      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(existingData));

      navigation.navigate('FechaNacimiento');
    } catch (error) {
      console.error('Error al guardar nombre y apellido:', error);
      Alert.alert('Error', 'Ocurrió un error al guardar el nombre y apellido.');
    }
  };

  return(
    <View style={styles.container_blanco}>

        <Pressable
            onPress={() => navigation.navigate('CrearContraseña')}
            style={{
            position: 'absolute',
            top: 60,
            left: 30,
            }}>
            <Icon name='caret-left' size={25} color="#fff" style={{ zIndex: 1 }}/>
            <Icon name='caret-left' size={55} color="#000" style={{
                top: -40,
                right: 6.5,
                zIndex: 0,
            }} />
        </Pressable>

        <Image
          source={require('./assets/ecochiloe_3.png')}
          style={styles.logo_estilo} />

        <Text style={styles.texto_grande}>¿Cómo se llama?</Text>

        <Text style={styles.texto_normal}>Ingrese su nombre y su apellido</Text>

        <TextInput
          style={[styles.botones, { marginTop: 20, flexDirection: 'row', textAlign: 'center' }]}
          placeholder='Nombre'
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={[styles.botones, { marginTop: 10, flexDirection: 'row', textAlign: 'center' }]}
          placeholder='Apellido'
          value={apellido}
          onChangeText={setApellido}
        />

        <Pressable
          style={[styles.botones, { backgroundColor: '#000', borderColor: '#000'}]}
          onPress={guardarNombreApellido}
        >
          <Text style={[styles.texto_normal, { color: '#fff'}]}>Continuar</Text> 
        </Pressable>

    </View>
  );
}