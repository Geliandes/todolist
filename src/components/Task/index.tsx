import { View, TouchableOpacity, Text } from "react-native";
import { styles } from './styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TaskDTO } from "../../dtos/TaskDTO";

type TaskProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
}: TaskProps) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => onTaskDone(id)} style={styles.checkboxContainer}>
        <MaterialCommunityIcons 
          name={isCompleted ? 'checkbox-blank-circle' : 'checkbox-blank-circle-outline'}
          size={22}
          color={isCompleted ? "#8284FA" : "#4EA8DE"}
          style={styles.checkboxIcon}
        />
        {isCompleted && (
          <MaterialCommunityIcons 
            name="check"
            size={12}
            color={"#FFFFFF"}
            style={styles.checkIcon}
          />
        )}
      </TouchableOpacity>

      <Text style={[styles.taskTitle, isCompleted && styles.taskTitleCompleted]}>
        {title}
      </Text>

      <TouchableOpacity onPress={() => onTaskDeleted(id)}>
        <MaterialCommunityIcons 
          name="trash-can-outline"
          size={20}
          color={"#808080"}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
