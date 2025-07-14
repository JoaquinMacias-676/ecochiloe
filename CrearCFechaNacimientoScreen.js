import { Text, View, Pressable, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { styles } from './styles_login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

import React, { useState } from 'react'
import * as FileSystem from 'expo-file-system'

export default function FechaNacimiento({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const [fecha, setFecha] = useState ('');

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  const validarFecha = (fecha) => {

    const regex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(fecha);
  };

  const guardarFechaNacimiento = async () => {
    if (!fecha || !validarFecha(fecha)) {
      Alert.alert('Fecha inválida', 'Por favor, ingrese una fecha válida, como por ejemplo: 03/07/2003.');
      return;
    }

    try {
      const fileUri = FileSystem.documentDirectory + 'cuentas.json';

      const fileExists = await FileSystem.getInfoAsync(fileUri);
      if (!fileExists.exists) {
        Alert.alert('Error', 'No se encontró una cuenta para agregar la fecha.');
        return;
      }

      const fileContents = await FileSystem.readAsStringAsync(fileUri);
      const existingData = JSON.parse(fileContents);

      if (existingData.length === 0) {
        Alert.alert('Error', 'No hay datos de cuenta registrados.');
        return;
      }

      const ultimaCuenta = existingData[existingData.length - 1];
      ultimaCuenta.fechaNacimiento = fecha;

      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(existingData));

      navigation.navigate('Tabs');
    } catch (error) {
      console.error('Error al guardar la fecha de nacimiento:', error);
      Alert.alert('Error', 'Ocurrió un error al guardar la fecha de nacimiento.');
    }
  };

  return(
    <View style={styles.container_blanco}>

        <Pressable
            onPress={() => navigation.navigate('AgregarNombre')}
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

        <Text style={styles.texto_grande}>¿Cúando Nació?</Text>

        <Text style={styles.texto_normal}>Ingrese su fecha de nacimiento.</Text>
        <Text style={styles.texto_normal}>Usando el siguiente formato: Día/Mes/Año</Text>

        <View style={[styles.botones, { flexDirection: 'row', paddingHorizontal: 15, marginTop: 20 }]}>
          <Icon name='calendar' size={25} color='#d7d7d7' />
          <TextInput
            style={{ flex: 1, textAlign: 'center' }}
            placeholder="00/00/0000"
            value={fecha}
            onChangeText={setFecha}
          />
        </View>

        <Pressable
          style={[styles.botones, { backgroundColor: '#000', borderColor: '#000'}]}
          onPress={guardarFechaNacimiento}
        >
          <Text style={[styles.texto_normal, { color: '#fff'}]}>Continuar</Text> 
        </Pressable>

    </View>
  );
}