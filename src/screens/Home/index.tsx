import { Alert, Image, Pressable, Text, TextInput, View, FlatList } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Empty } from "../../components/Empty";
import { Task } from "../../components/Task";
import { uuid } from "../../utils/uuid";
import { TaskDTO } from "../../dtos/TaskDTO";

export function Home() {
  const [isTextInputFocused, setTextInputFocused] = useState(false);

  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskAdd = () => {
    if (newTask.trim().length === 0) {
      Alert.alert("Erro", "Por favor, adicione o nome da tarefa.");
      return;
    }

    const newTaskObj: TaskDTO = {
      id: uuid(),
      title: newTask,
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask('');
  };

  const handleTaskDone = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleTaskDelete = (id: string) => {
    Alert.alert("Remover", "Deseja remover esta tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const sortedTasks = tasks.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, isTextInputFocused && styles.inputFocused]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={() => setTextInputFocused(true)}
            onBlur={() => setTextInputFocused(false)}
            value={newTask}
            onChangeText={setNewTask}
          />
          <Pressable
            style={({ pressed }) => [
              styles.addTaskButton,
              pressed && styles.addTaskButtonPressed,
            ]}
            onPress={handleTaskAdd}
          >
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={22}
              color={'#F2F2F2'}
            />
          </Pressable>
        </View>
        <View style={styles.tasksContainer}>
          <View style={styles.tasksHeader}>
            <View style={styles.taskCountContainer}>
              <Text style={[styles.taskCountTitle, { color: '#4EA8DE' }]}>
                Criadas
              </Text>
              <Text style={styles.taskCountCounter}>{totalTasksCreated}</Text>
            </View>
            <View style={styles.taskCountContainer}>
              <Text style={[styles.taskCountTitle, { color: '#8284FA' }]}>
                Concluídas
              </Text>
              <Text style={styles.taskCountCounter}>{totalTasksCompleted}</Text>
            </View>
          </View>

          <FlatList
            data={sortedTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Task
                id={item.id}
                title={item.title}
                isCompleted={item.isCompleted}
                onTaskDone={handleTaskDone}
                onTaskDeleted={handleTaskDelete}
              />
            )}
            ListEmptyComponent={<Empty />}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        </View>
      </View>
    </View>
  );
}
