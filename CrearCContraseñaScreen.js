import { Text, View, Pressable, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './styles_login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

import React, { useState } from 'react'
import * as FileSystem from 'expo-file-system';

export default function CrearCuentaContraseña({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const [password, setPassword] = useState('');

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  const guardarContraseña = async () => {
    if (!password || password.length < 8) {
      Alert.alert('Contraseña inválida', 'La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    try {
      const fileUri = FileSystem.documentDirectory + 'cuentas.json';

      const fileExists = await FileSystem.getInfoAsync(fileUri);
      if (!fileExists.exists) {
        Alert.alert('Error', 'No se encontró un correo para asociar la contraseña.');
        return;
      }

      const fileContents = await FileSystem.readAsStringAsync(fileUri);
      const existingData = JSON.parse(fileContents);

      if (existingData.length === 0) {
        Alert.alert('Error', 'No hay ningún correo registrado para asociar la contraseña.');
        return;
      }

      const ultimaCuenta = existingData[existingData.length - 1];
      ultimaCuenta.contraseña = password;

      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(existingData));

      navigation.navigate('AgregarNombre');
    } catch (error) {
      console.error('Error al guardar la contraseña:', error);
      Alert.alert('Error', 'Ocurrió un error al guardar la contraseña.');
    }
  };

  return(
    <View style={styles.container_blanco}>

      <Pressable
        onPress={() => navigation.navigate('CrearCuenta')}
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

        <Text style={styles.texto_grande}>Crea una contraseña</Text>

        <Text style={styles.texto_normal}>Crea una contraseña para tu cuenta</Text>

        <View style={[styles.botones, { flexDirection: 'row', paddingHorizontal: 15 }]}>
          <Icon name='lock' size={24} color='#d7d7d7' />
          <TextInput
            style={{ flex: 1, textAlign: 'center' }}
            placeholder="Ingrese una contraseña"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <Pressable
          style={[styles.botones, { backgroundColor: '#000', borderColor: '#000' }]}
          onPress={guardarContraseña}
        >
          <Text style={[styles.texto_normal, { color: '#fff' }]}>Continuar</Text>
        </Pressable>

    </View>
  );
}