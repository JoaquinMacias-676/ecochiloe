import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// Estilo del fondo blanco
  container_blanco: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 70,
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
// Estilo para el texto del login
  textobotones_login: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

// Estilo para el texto de bienvenida
  bienvenida_texto: {
    marginVertical: -30,
    fontSize: 22,
    color: '#00000',
    fontFamily: 'Roboto Condensed Bold',
    fontWeight: '900',
  },

// Estilo para los botones
  botones_login: {
    marginVertical: 180, 
    width: 150,
    height: 60, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },

// Estilo Logo Login
  logo_estilo: {
    marginVertical: -50,
    width: 260,
    height: 260,
    resizeMode: 'contain',
  },

// Estilo para el cuadro de "Inicia de sesión"
  container_gris: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    marginTop: 50,
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