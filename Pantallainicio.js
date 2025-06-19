import { View, StyleSheet, Image } from "react-native";

export default function Pantallainicio({ navigation }) {
    return(
        <View style={styles.container}>
            <Image
            source={require('/.assets/EcoChiloe_def_3')}
            style={styles.logo3}
            />
            <Text>Hola</Text>
        </View>
    );
}

// Creando los diferentes estilos
const styles = StyleSheet.create({
  
// Estilo del fondo
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 150,
  },

  logo3: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    color: '#000000',
  },
});
