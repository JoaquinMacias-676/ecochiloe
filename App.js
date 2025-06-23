import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SelectCultivoScreen from './SelectCultivoScreen';
import BusCultivosScreen from './BusCultivosScreen';
import TuberculosScreen from './TuberculosScreen';
import HortalizasScreen from './HortalizasScreen';
import FrutasScreen from './FrutasScreen';
import CerealesScreen from './CerealesScreen';

const Stack = createNativeStackNavigator();

// Creación de interfaces
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
