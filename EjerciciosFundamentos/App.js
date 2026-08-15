import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const nombre = "Axeell";


function saludar(usuario) {
  return "Hola " + usuario;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{saludar(nombre)}</Text>
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
