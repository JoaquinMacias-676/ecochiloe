import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando interfaces
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SelectCultivoScreen from './SelectCultivoScreen';
import BusCultivosScreen from './BusCultivosScreen';
import TuberculosScreen from './TCTuberculosScreen';
import HortalizasScreen from './TCHortalizasScreen';
import FrutasScreen from './TCFrutasScreen';
import CerealesScreen from './TCCerealesScreen';

// Importando interfaces de Cereales
import InfoHuequen from './InfoCerealHuequenScreen';
import InfoLanco from './InfoCerealLancoScreen';
import InfoMango from './InfoCerealMangoScreen';
import InfoQuinoa from './InfoCerealQuinoaScreen';

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
        <Stack.Screen name='InfoHuequen' component={InfoHuequen} />
        <Stack.Screen name='InfoLanco' component={InfoLanco} />
        <Stack.Screen name='InfoMango' component={InfoMango} />
        <Stack.Screen name='InfoQuinoa' component={InfoQuinoa} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
