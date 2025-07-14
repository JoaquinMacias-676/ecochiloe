import { Text, View, Pressable, TouchableOpacity, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './styles_login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system';

export default function IniciarSesion({ navigation }) {
  const [fuentesCargadas] = useFonts({
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  if (!fuentesCargadas) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  const iniciarSesion = async () => {
    if (!email || !password) {
      Alert.alert('Campos incompletos', 'Por favor ingresa tu correo y contraseña.');
      return;
    }

    try {
      const fileUri = FileSystem.documentDirectory + 'cuentas.json';
      const fileExists = await FileSystem.getInfoAsync(fileUri);

      if (!fileExists.exists) {
        Alert.alert('Error', 'No se encontraron cuentas registradas.');
        return;
      }

      const fileContent = await FileSystem.readAsStringAsync(fileUri);
      const cuentas = JSON.parse(fileContent);

      const cuentaEncontrada = cuentas.find(
        (cuenta) => cuenta.correo === email && cuenta.contraseña === password
      );

      if (cuentaEncontrada) {
        navigation.navigate('Tabs');
      } else {
        Alert.alert('Error', 'Correo o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión.');
    }
  };

  return(
    <View style={styles.container_blanco}>

        <Image
          source={require('./assets/ecochiloe_3.png')}
          style={styles.logo_estilo} />

        <Text style={styles.texto_grande}>Inicia Sesión</Text>

        <Text style={styles.texto_normal}>Mediante su correo electrónico y contraseña</Text>

        <View style={[styles.botones, { flexDirection: 'row', paddingHorizontal: 15, marginTop: 20 }]}>
          <Icon name='envelope' size={24} color='#d7d7d7' />
          <TextInput
            style={{ flex: 1, textAlign: 'center' }}
            placeholder="Ingrese su correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={[styles.botones, { marginTop: 10, flexDirection: 'row',paddingHorizontal: 15 }]}>
          <TouchableOpacity onPress={() => setMostrarContraseña(!mostrarContraseña)}>
            <Icon
              name={mostrarContraseña ? 'eye' : 'eye-slash'}
              size={24}
              color='#d7d7d7'
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TextInput
          style={{ flex: 1, textAlign: 'center' }}
          placeholder='Ingrese su contraseña'
          secureTextEntry={!mostrarContraseña}
          value={password}
          onChangeText={setPassword}
          />
        </View>

        <Pressable
          style={[styles.botones, { backgroundColor: '#000', borderColor: '#000' }]}
          onPress={iniciarSesion}
        >
          <Text style={[styles.texto_normal, { color: '#fff' }]}>Continuar</Text>
        </Pressable>

        <View style={styles.container_gris}>
          <Text style={styles.texto_normal}>¿No tienes una cuenta?{' '}
            <Text style={[styles.texto_normal, { color: '#00bf63', textDecorationLine: 'underline', }]}
            onPress={() => navigation.navigate('CrearCuenta')}>
              Regístrate aquí</Text>
          </Text>
        </View>

    </View>
  );
}