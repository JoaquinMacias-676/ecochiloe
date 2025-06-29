import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando interfaces
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SelectCultivoScreen from './SelectCultivoScreen';
import BusCultivosScreen from './BusCultivosScreen';
import TuberculosScreen from './TuberculosScreen';
import HortalizasScreen from './HortalizasScreen';
import FrutasScreen from './FrutasScreen';
import CerealesScreen from './CerealesScreen';

// Importando interfaces de Cereales
import InfoCerealHuequenScreen from './InfoCerealHuequenScreen';
import InfoCerealLancoScreen from './InfoCerealLancoScreen';
import InfoCerealMangoScreen from './InfoCerealMangoScreen';
import InfoCerealQuinoaScreen from './InfoCerealQuinoaScreen';

// Importando interfaces de Frutas
import InfoFrutaChilcoScreen from './InfoFrutaChilcoScreen';
import InfoFrutaFrutillaBlancaScreen from './InfoFrutaFrutillaBlancaScreen';
import InfoFrutaMurtaScreen from './InfoFrutaMurtaScreen';
import InfoFrutaZarzaparrillaScreen from './InfoFrutaZarzaparrillaScreen' 

// Importando interfaces de Hortalizas
import InfoHortaAjoChiloteScreen from './InfoHortaAjoChiloteScreen';
import InfoHortaLechugaCriollaChilotaScreen from './InfoHortaLechugaCriollaChilotaScreen';
import InfoHortaMaquiScreen from './InfoHortaMaquiScreen';
import InfoHortaNalcaScreen from './InfoHortaNalcaScreen';

// Importando interfaces de Tubérculos
import InfoPapaBrujaScreen from './InfoPapaBrujaScreen';
import InfoPapaCachoDeToroScreen from './InfoPapaCachoDeToroScreen';
import InfoPapaClavelaOjonaScreen from './InfoPapaClavelaOjonaScreen'
import InfoPapaRojaScreen from './InfoPapaRojaScreen';

const Stack = createNativeStackNavigator();

// Creación de navegación de interfaces
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SeleccionCultivo" component={SelectCultivoScreen} />
        <Stack.Screen name="BusquedaCultivos" component={BusCultivosScreen} />
        <Stack.Screen name="Tuberculos" component={TuberculosScreen} />
        <Stack.Screen name='Hortalizas' component={HortalizasScreen}/>
        <Stack.Screen name='Frutas' component={FrutasScreen} />
        <Stack.Screen name='Cereales' component={CerealesScreen} />
        <Stack.Screen name='InfoHuequen' component={InfoCerealHuequenScreen} />
        <Stack.Screen name='InfoLanco' component={InfoCerealLancoScreen} />
        <Stack.Screen name='InfoMango' component={InfoCerealMangoScreen} />
        <Stack.Screen name='InfoQuinoa' component={InfoCerealQuinoaScreen} />
        <Stack.Screen name='InfoChilco' component={InfoFrutaChilcoScreen} />
        <Stack.Screen name='InfoFrutilla' component={InfoFrutaFrutillaBlancaScreen} />
        <Stack.Screen name='InfoMurta' component={InfoFrutaMurtaScreen} />
        <Stack.Screen name='InfoZarzaparrilla' component={InfoFrutaZarzaparrillaScreen} />
        <Stack.Screen name='InfoAjo' component={InfoHortaAjoChiloteScreen} />
        <Stack.Screen name='InfoLechuga' component={InfoHortaLechugaCriollaChilotaScreen} />
        <Stack.Screen name='InfoMaqui' component={InfoHortaMaquiScreen} />
        <Stack.Screen name='InfoNalca' component={InfoHortaNalcaScreen} />
        <Stack.Screen name='InfoPapaBruja' component={InfoPapaBrujaScreen} />
        <Stack.Screen name='InfoPapaCachoDeToro' component={InfoPapaCachoDeToroScreen} />
        <Stack.Screen name='InfoPapaClavelaOjona' component={InfoPapaClavelaOjonaScreen} />
        <Stack.Screen name='InfoPapaRoja' component={InfoPapaRojaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
