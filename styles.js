import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// Estilo del fondo
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150,
  },

// Estilo para el título  
  textocolor: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

// Estilo para el texto de los botones
  textocolor_botones: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

// Texto de Papas
  papas: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'Black',
    paddingTop: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

// Estilo para los botones de la pantalla principal
  botones_principal: {
    marginVertical: 10, 
    width: 288,
    height: 85, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },

// Estilo para los botones de los tipos de cultivos
  botones_clasificacion_cultivos: {
    marginVertical: 10,
    marginHorizontal: 10, 
    width: 160,
    height: 200, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#0c7744', 
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
// Estilo para que los botones esten uno al lado del otro
  botones_horizontal_cultivos: {
    flexDirection: 'row',
  },

// Estilo iconos de cultivos
  cultivos_iconos: {
    width: 125,
    height: 125,
    marginTop: 20,
    resizeMode: 'contain',
  },

  // Estilo iconos de cultivos
  cultivos_iconos_papa_pukara: {
    width: 100,
    height: 100,
    marginTop: 30,
    resizeMode: 'contain',
  },
});