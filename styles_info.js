import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

// Estilo del fondo verde
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150,
  },

// Estilo Boton flecha
  flechaboton: {
    position: 'absolute',
    top: 50,
    left: -10,
    padding: 30,
  },

// Estilo imagen flecha
  flechaimagen: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    color: '#000000',
  },

// Cuadro de texto
  cuadro_de_texto: {
    width: 300,
    height: 450,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },

// Estilo de Imagen
  imagen: {
    width: 90,
    height: 90,
    borderRadius: 8,
    position: 'absolute',
    top: 185,
    left: 175,
    borderWidth: 1,
    borderColor: 'black',
  },

// Estilo para botón "añadir"
  boton_añadir: {
    marginVertical: 180, 
    width: 150,
    height: 60, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },

// Texto color botón "añadir"
  texto_boton_añadir: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Baloo 2 Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 6,
  },

// Estilo para el título que describe la pantalla
  titulo_interfaz: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    textAlign: 'center',
    position: 'absolute',
    top: 73,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0},
    textShadowRadius: 6,
  },
// Título
  titulo: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'Roboto Condensed Bold',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },

// Subtítulo
  subtitulo: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Roboto Condensed Bold',
    fontWeight: '900',
    textAlign: 'left',
    marginBottom: 2,
  },

// Texto normal
  texto: {
    fontSize: 12,
    fontFamily: 'Roboto Light',
    color: 'black',
    textAlign: 'left',
    marginBottom: 10,
  },
});