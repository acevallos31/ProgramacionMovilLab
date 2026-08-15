import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const nombre = "Axeell";
const edad  = 39;

const tareas = [
  { id: 1, nombre: "Estudiar Progra Movil" },
  { id: 2, nombre: "Realizar la tarea" },
  { id: 3, nombre: "Subir App.js" },
  { id: 4, nombre: "Hacer el Examen" },
  { id: 5, nombre: "Aprobar la CLase" },
];

function saludar(usuario) {
  return "Hola " + usuario;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{saludar(nombre)}</Text>
      <Text>Edad: {edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}</Text>
      {tareas.map((tarea) => (
        <Text key={tarea.id}>{tarea.nombre}</Text>
      ))}
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
