import React, { useState } from 'react';
import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles_home';
import { useFonts } from 'expo-font';

export default function Home({ navigation }) { 
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const handlePress = () => {
    setExpanded1(!expanded1);
    setExpanded2(!expanded2);
    setExpanded3(!expanded3);
    setExpanded4(!expanded4);
  };

  const [fontsLoaded] = useFonts({
    'Baloo 2 Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00bf63" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: 120 }]}>

      <Text style={styles.textocolor}>CULTIVOS</Text>
      
      <View style={styles.botones_horizontal_cultivos}>
        <Pressable
          onPress={() => setExpanded1(!expanded1)}
          style={expanded1 ? styles.botones_grande : styles.botones_pequeño}
        >
          {expanded1 && <Text style={styles.texto_boton}>Tubérculos</Text>}

          <Image
            source={require('./assets/tuberculos.png')}
            style={expanded1 ? styles.icono_grande : styles.icono_pequeño}
            resizeMode="cover"
          />

          {expanded1 && (
            <Pressable
              style={styles.boton_ir}
              onPress={() => navigation.navigate('Tuberculos')}
            >
              <Text style={[styles.texto_boton, { fontSize: 18 }]}>Ir</Text>
            </Pressable>
          )}
        </Pressable>

        <Pressable
          onPress={() => setExpanded2(!expanded2)}
          style={expanded2 ? styles.botones_grande : styles.botones_pequeño}
        >
          {expanded2 && <Text style={styles.texto_boton}>Hortalizas</Text>}

          <Image
            source={require('./assets/hortalizas.png')}
            style={expanded2 ? styles.icono_grande : styles.icono_pequeño}
            resizeMode="cover"
          />

          {expanded2 && (
            <Pressable
              style={styles.boton_ir}
              onPress={() => navigation.navigate('Hortalizas')}
            >
              <Text style={[styles.texto_boton, { fontSize: 18 }]}>Ir</Text>
            </Pressable>
          )}
        </Pressable>
      </View>
    </View>
  );
}