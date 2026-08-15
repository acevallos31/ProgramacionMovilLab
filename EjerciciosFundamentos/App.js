import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const nombre = "Axeell";
const edad  = 39;


function saludar(usuario) {
  return "Hola " + usuario;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{saludar(nombre)}</Text>
      <Text>Edad: {edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
