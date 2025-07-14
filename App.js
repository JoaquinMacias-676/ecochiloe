import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando interfaces de creación de cuenta
import CrearCuentaScreen from './CrearCuentaScreen';
import CrearContraseñaScreen from './CrearCContraseñaScreen'
import AgregarNombreScreen from './CrearCAgregarNombreScreen';
import FechaNacimientoScreen from './CrearCFechaNacimientoScreen';

// Importando Tab
import Tabs from './Tabs';

// Importando interfaces de inicio de sesión
import IniciarSesionScreen from './IniciarSesionScreen';

// Importando interfaces principales
import HomeScreen from './HomeScreen';
import TuberculosScreen from './TCTuberculosScreen';
import HortalizasScreen from './TCHortalizasScreen';
import FrutasScreen from './TCFrutasScreen';
import MedicinalesScreen from './TCMedicinalesScreen';

// Importando interfaces de Cultivos Medicinales
import InfoArrayan from './InfoMedArrayanScreen';
import InfoCanelo from './InfoMedCaneloScreen';
import InfoMatico from './InfoMedMaticoScreen';
import InfoMichay from './InfoMedMichayScreen';

// Importando interfaces de Frutas
import InfoChilco from './InfoFrutaChilcoScreen';
import InfoFrutilla from './InfoFrutaFrutillaBlancaScreen';
import InfoMurta from './InfoFrutaMurtaScreen';
import InfoZarzaparrilla from './InfoFrutaZarzaparrillaScreen' 

// Importando interfaces de Hortalizas
import InfoAjo from './InfoHortaAjoChiloteScreen';
import InfoLechuga from './InfoHortaLechugaCriollaChilotaScreen';
import InfoMaqui from './InfoHortaMaquiScreen';
import InfoNalca from './InfoHortaNalcaScreen';

// Importando interfaces de Tubérculos
import InfoPapaBruja from './InfoPapaBrujaScreen';
import InfoPapaCachoDeToro from './InfoPapaCachoDeToroScreen';
import InfoPapaClavelaOjona from './InfoPapaClavelaOjonaScreen'
import InfoPapaRoja from './InfoPapaRojaScreen';

// Importando interfaz de Configuración
import Configuracion from './ConfiguracionScreen';

const Stack = createNativeStackNavigator();

// Creación de navegación de interfaces
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='IniciarSesion' component={IniciarSesionScreen} />
        <Stack.Screen name="CrearCuenta" component={CrearCuentaScreen} />
        <Stack.Screen name='CrearContraseña' component={CrearContraseñaScreen} />
        <Stack.Screen name='AgregarNombre' component={AgregarNombreScreen} />
        <Stack.Screen name='FechaNacimiento' component={FechaNacimientoScreen} />
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tuberculos" component={TuberculosScreen} />
        <Stack.Screen name='Hortalizas' component={HortalizasScreen}/>
        <Stack.Screen name='Frutas' component={FrutasScreen} />
        <Stack.Screen name='Medicinales' component={MedicinalesScreen} />
        <Stack.Screen name='InfoArrayan' component={InfoArrayan} />
        <Stack.Screen name='InfoCanelo' component={InfoCanelo} />
        <Stack.Screen name='InfoMatico' component={InfoMatico} />
        <Stack.Screen name='InfoMichay' component={InfoMichay} />
        <Stack.Screen name='InfoChilco' component={InfoChilco} />
        <Stack.Screen name='InfoFrutilla' component={InfoFrutilla} />
        <Stack.Screen name='InfoMurta' component={InfoMurta} />
        <Stack.Screen name='InfoZarzaparrilla' component={InfoZarzaparrilla} />
        <Stack.Screen name='InfoAjo' component={InfoAjo} />
        <Stack.Screen name='InfoLechuga' component={InfoLechuga} />
        <Stack.Screen name='InfoMaqui' component={InfoMaqui} />
        <Stack.Screen name='InfoNalca' component={InfoNalca} />
        <Stack.Screen name='InfoPapaBruja' component={InfoPapaBruja} />
        <Stack.Screen name='InfoPapaCachoDeToro' component={InfoPapaCachoDeToro} />
        <Stack.Screen name='InfoPapaClavelaOjona' component={InfoPapaClavelaOjona} />
        <Stack.Screen name='InfoPapaRoja' component={InfoPapaRoja} />
        <Stack.Screen name='Configuracion' component={Configuracion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
