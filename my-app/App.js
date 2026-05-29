import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  // Função para salvar tarefas no AsyncStorage
  const saveTasks = async (tasksToSave) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasksToSave));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  };

  // Função para carregar tarefas do AsyncStorage
  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  // Carregar tarefas quando o app abrir
  useEffect(() => {
    loadTasks();
  }, []);

  // Função para adicionar tarefa
  const handleAdd = () => {
    if (taskText.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      task: taskText,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setTaskText('');
  };

  // Função para deletar tarefa
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Renderizar cada item da FlatList
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{item.task}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          placeholderTextColor="#999"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
  },
  addButton: {
    backgroundColor: '#2f80ed',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    marginLeft: 16,
    padding: 8,
    backgroundColor: '#eb5757',
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
