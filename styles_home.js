import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

// Estilo del fondo verde
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150,
  },

// Estilo Logo Login
  logo_estilo: {
    marginVertical: -50,
    width: 260,
    height: 260,
    resizeMode: 'contain',
  },

// Estilo para el texto de bienvenida
  bienvenida_texto: {
    fontSize: 15,
    color: '#00000',
    fontFamily: 'Roboto Condensed Bold',
    fontWeight: '900',
  },

// Estilo para el título "Mis Cultivos"
  textocolor: {
    fontFamily: 'Baloo 2 Bold',
    color: 'white',
    fontSize: 30,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

// Estilo para los botones de la pantalla principal
  botones_pequeño: {
    marginVertical: 30,
    marginHorizontal: 15,
    width: 140,
    height: 140, 
    borderRadius: 100, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78e0af',
    borderColor: '#0c7744',
  },

// Estilo para los botones de la pantalla principal
  botones_grande: {
    marginVertical: 30,
    marginHorizontal: 15,
    width: 140,
    height: 140, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78e0af',
    borderColor: '#0c7744',
  },

// Estilo para que los botones esten uno al lado del otro
  botones_horizontal_cultivos: {
    flexDirection: 'row',
  },

// Icono Grande
  icono_grande: {
    width: 110,
    height: 110,
  },

// Icono Pequeño
  icono_pequeño: {
    width: 90,
    height: 90,
    top: 15,
  },

// Texto para los botones
  texto_boton: {
    fontFamily: 'Baloo 2 Bold',
    color: 'white',
    fontSize: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
    marginBottom: -25,
  },

// Forma de boón "Ir"
  boton_ir: {
    fontFamily: 'Baloo 2 Bold',
    fontSize: 10,
    borderRadius: 5,
    borderWidth: 2,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
    backgroundColor: '#10a15bff',
    borderColor: '#0c7744',
    width: 140,
    height: 30,
    alignItems: 'center',
    marginTop: 15,
  },

// Contorno tutorial
  contorno_tutorial: {
    height: 60,
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0c7744',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

// Texto Tutorial

  texto_tutorial: {
    fontFamily: 'Roboto Bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',

  }
});