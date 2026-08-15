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
      <Text style={styles.titulo}>{saludar(nombre)}</Text>
      <Text style={styles.texto}>
        Edad: {edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}</Text>
      <View style={styles.section}> 
        <Text style={styles.sectionTitle}>
          Lista de tareas
        </Text> 
      {tareas.map((tarea) => (
        <Text key={tarea.id} style={styles.task}> 
         {tarea.id}. {tarea.nombre}
        </Text>
      ))}
      </View>
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
    padding: 30,
    marginTop: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
  },

  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    padding: 5,
  },
  task: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 10,
  },
  texto: {
    fontSize: 16,
    marginTop: 10,
    marginEnd: 10,
    marginBottom: 5,
    paddingEnd: 5,
    },
});
