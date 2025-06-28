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

// Título
  titulo: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

// Subtítulo
  subtitulo: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 2,
  },

// Texto normal
  texto: {
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
    marginBottom: 10,
  },

// Imagen Papa Bruja
  imagen_papa_bruja: {
    width: 100,
    height: 100,
    borderRadius: 8,
    position: 'absolute',
    top: 185,
    left: 175,
    borderWidth: 1,
    borderColor: 'black',
  },
});