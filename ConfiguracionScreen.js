import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

export default function Configuracion({ navigation }) {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const cerrarSesion = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'IniciarSesion' }],
    });
  };

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <View style={styles.container}>
        <Text style={[styles.textocolor, { paddingBottom: 100 }]}>CONFIGURACIÓN</Text>
        <Pressable
            style={styles.boton_configuracion}
            onPress={toggleFormulario}>
            <FontAwesome5
            name={mostrarFormulario ? 'chevron-up' : 'chevron-down'}
            size={25}
            color="white"
            solid
            style={{ paddingLeft: 20 }}
            />
            <Text style={styles.texto_configuracion}>Modificar Contraseña</Text>
        </Pressable>

        {mostrarFormulario && (
            <View style={{ padding: 20, width: '90%' }}>
            <Text style={styles.label}>Contraseña actual</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Escribe tu contraseña actual"
            />
            <Text style={styles.label}>Nueva contraseña</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Escribe tu nueva contraseña"
            />
            <Text style={styles.label}>Confirmar nueva contraseña</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Confirma tu nueva contraseña"
            />
            <Pressable style={styles.boton_guardar}>
                <Text style={styles.texto_guardar}>Guardar cambios</Text>
            </Pressable>
            </View>
        )}

        <Pressable
            style={[styles.boton_configuracion, { borderBottomWidth: 4, borderBottomColor: '#0c7744' }]}
            onPress={cerrarSesion}>
            <FontAwesome5 name= 'sign-out-alt' size={25} color='white' solid style={{ paddingLeft: 20}} />
            <Text style={styles.texto_configuracion}>Cerrar sesión</Text>
        </Pressable>
    </View>
  );
}
