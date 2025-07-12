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

  const [email, setEmail] = useState('');

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(correo);
  };

  const guardarCorreo = async () => {

    if (!email || !validarCorreo(email)) {
      Alert.alert('Correo inválido', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }

    try {
      const fileUri = FileSystem.documentDirectory + 'cuentas.json';

      let existingData = [];

      const fileExists = await FileSystem.getInfoAsync(fileUri);
      if (fileExists.exists) {

        const fileContents = await FileSystem.readAsStringAsync(fileUri);
        existingData = JSON.parse(fileContents);
      } else {

        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify([]));
      }

      existingData.push({ correo: email });

      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(existingData));

      navigation.navigate('CrearContraseña');
    } catch (error) {
      console.error('Error al guardar el correo:', error);
      Alert.alert('Error', 'Ocurrió un error al guardar el correo.');
    }
  };

  return (
    <View style={styles.container_blanco}>
      <Image
        source={require('./assets/ecochiloe_3.png')}
        style={styles.logo_estilo}
      />
      <Text style={styles.texto_grande}>Crea una cuenta</Text>
      <Text style={styles.texto_normal}>Por medio de un correo electrónico</Text>

      <View style={[styles.botones, { flexDirection: 'row', paddingHorizontal: 15 }]}>
        <Icon name='envelope' size={24} color='#d7d7d7' />
        <TextInput
          style={{ flex: 1, textAlign: 'center' }}
          placeholder="Ingrese un correo electrónico"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <Pressable
        style={[styles.botones, { backgroundColor: '#000', borderColor: '#000' }]}
        onPress={guardarCorreo}
      >
        <Text style={[styles.texto_normal, { color: '#fff' }]}>Continuar</Text>
      </Pressable>

      <View style={styles.container_gris}>
        <Text style={styles.texto_normal}>
          ¿Ya tienes una cuenta?{' '}
          <Text
            style={[styles.texto_normal, { color: '#00bf63', textDecorationLine: 'underline' }]}
            onPress={() => navigation.navigate('IniciarSesion')}>Inicia sesión</Text>
        </Text>
      </View>
    </View>
 );
}