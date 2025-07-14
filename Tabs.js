import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Configuracion from './ConfiguracionScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
            fontFamily: 'Baloo 2 Bold',
            fontSize: 10,
            marginTop: 10,
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
          height: 120,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => <View style={styles.tab_borde} />,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Configuracion') {
            iconName = 'cog';
          }

          return (
            <Icon 
                name={iconName}
                size={30}
                color={color}
                style={{ marginBottom: -20 }}
            />
            );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'INICIO' }} />
      <Tab.Screen name="Configuracion" component={Configuracion} options={{ title: 'CONFIGURACIÓN' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab_borde: {
    flex: 1,
    backgroundColor: '#0c7744',
    borderTopWidth: 6,
    borderTopColor: '#23a768',
    borderStyle: 'solid',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});