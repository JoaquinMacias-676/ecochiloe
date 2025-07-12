import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

// Estilo del fondo verde
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150,
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
    marginVertical: 50,
    marginHorizontal: 20,
    width: 110,
    height: 110, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78e0af',
    borderColor: '#0c7744',
  },

// Estilo para los botones de la pantalla principal
  botones_grande: {
    marginVertical: 50,
    marginHorizontal: 20,
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

// Icono pequeño
  icono_pequeño: {
    width: 100,
    height: 100,
  },

// Icono Grande
  icono_grande: {
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
  }
});