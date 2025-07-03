import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// Estilo del fondo verde
  container: {
    flex: 1,
    backgroundColor: '#00bf63',
    alignItems: 'center',
    paddingTop: 150,
  },

// Estilo contenedor de "Mis cultivos"
  container_contorno: {
    position: 'relative',
    marginTop: -10,
    marginBottom: 20,
    marginRight: 150,
  },

// Estilo del fondo blanco
  container_blanco: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150,
  },

// Estilo para el título que describe la pantalla
  titulo_interfaz: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 73,
  },

// Estulo para el texto de bienvenida
  bienvenida_texto: {
    marginVertical: -30,
    fontSize: 20,
    color: '#00000',
    fontWeight: 'bold',
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

// Estilo para el contador de cultivos en la pantalla principal
  textocolor_contador: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
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

// Estilo para los botones de la pantalla principal
  botones_principal: {
    marginVertical: 16, 
    width: 250,
    height: 125, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },

// Estilo para los botones de selección y busqueda de cultivos
  botones_tipo_cultivo: {
    marginVertical: 10, 
    width: 288,
    height: 85, 
    borderRadius: 16, 
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0c7744', 
  },

// Estilo para el texto de los botones de la pantalla principal y login
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

// Texto de Iconos Cultivos
  icono_texto: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Baloo 2 Bold',
    paddingTop: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
    textAlign: 'center',
  },

// Estilo Logo Login
  logo_estilo: {
    marginVertical: -50,
    width: 275,
    height: 275,
    resizeMode: 'contain',
  },
});