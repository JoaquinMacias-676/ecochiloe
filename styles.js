import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// Estilo del fondo verde
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150,
  },
  
// Estilo para el título que describe la pantalla
  titulo_interfaz: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    textAlign: 'center',
    position: 'absolute',
    top: 110,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
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

// Estilo para el texto de los botones
  texto_selec_cultivos: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

// Estilo para el texto de los botones de la pantalla principal
  textobotones_home: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

// Estilo para los botones de los tipos de cultivos (botones que tienen iconos)
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

// Texto de Iconos Cultivos
  icono_texto: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    paddingTop: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
    textAlign: 'center',
  },
});