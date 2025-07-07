import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// Estilo del fondo blanco
  container_blanco: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 70,
  },

// Estilo Logo Login
  logo_estilo: {
    marginVertical: -50,
    width: 260,
    height: 260,
    resizeMode: 'contain',
  },

// Botones de login
  botones: {
    width: 330,
    height: 40, 
    borderRadius: 14, 
    borderWidth: 2,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ebebeb',
  },

// Estilo para el cuadro de "Inicia de sesión" y "Regístrate aquí"
  container_gris: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    marginTop: 130,
  },

// Texto grande para "Títulos"
  texto_grande: {
    fontSize: 27,
    color: 'black',
    fontFamily: 'Roboto Bold',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },

// Texto normal
  texto_normal: {
    fontSize: 15,
    fontFamily: 'Roboto Regular',
    color: 'black',
  },
});