import { Text, View, Pressable, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './styles_login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system';

export default function CrearCuenta({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  // Función para guardar el correo en un archivo JSON
  const guardarCorreo = async () => {
    try {
      // Obtenemos la ruta donde queremos guardar el archivo
      const fileUri = FileSystem.documentDirectory + 'cuentas.json';

      // Intenta leer el archivo si ya existe
      let existingData = [];
      try {
        const fileContents = await FileSystem.readAsStringAsync(fileUri);
        existingData = JSON.parse(fileContents); // Convertimos el archivo JSON en objeto
      } catch (error) {
        console.log("Archivo no encontrado, creando uno nuevo.");
      }

      // Agregamos el nuevo correo al array de correos
      existingData.push({ correo: email });

      // Guardamos el archivo JSON con los nuevos datos
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(existingData));

      // Navega a la siguiente pantalla
      navigation.navigate('CrearContraseña');
    } catch (error) {
      console.error('Error al guardar el correo:', error);
    }
  };

  return(
    <View style={styles.container_blanco}>

        <Image
          source={require('./assets/ecochiloe_3.png')}
          style={styles.logo_estilo} />

        <Text style={styles.texto_grande}>Crea una cuenta</Text>

        <Text style={styles.texto_normal}>Por medio de un correo electrónico</Text>

        {/* TextInput para que el usuario ingrese el correo */}
        <TextInput
          style={[styles.botones, { flexDirection: 'row' }]}
          placeholder="Ingrese un correo electrónico"
          placeholderTextColor="#d7d7d7"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <Pressable
          style={[styles.botones, { backgroundColor: '#000', borderColor: '#000' }]}
          onPress={guardarCorreo} // Guardamos el correo al presionar continuar
        >
          <Text style={[styles.texto_normal, { color: '#fff' }]}>Continuar</Text>
        </Pressable>

        <View style={styles.container_gris}>

          <Text style={styles.texto_normal}>¿Ya tienes una cuenta?{' '}
            <Text style={[styles.texto_normal, { color: '#00bf63', textDecorationLine: 'underline', }]}
            onPress={() => navigation.navigate('IniciarSesion')}>Inicia sesión</Text>
          </Text>

        </View>

    </View>
  );
}