import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Pantallainicio from './Pantallainicio.js';
import HomeScreen from './HomeScreen';
import CultivosScreen from './CultivosScreen';

const Stack = createNativeStackNavigator();

// Creación de interfaces
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Pantallainicio} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cultivos" component={CultivosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
