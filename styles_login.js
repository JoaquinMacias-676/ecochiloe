import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// Estilo del fondo blanco
  container_blanco: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150,
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

// Estulo para el texto de bienvenida
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
    width: 275,
    height: 275,
    resizeMode: 'contain',
  },
});