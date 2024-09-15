import { Image, Text, View } from "react-native";
import { styles } from './styles'

export function Empty() {
  return (
    <View style={styles.emptyTasksContainer}>
      <Image 
          style={styles.emptyTasksImage}
          source={require('../../../assets/clipboard.png')}
      />
      <View>
        <Text style={styles.emptyTasksTitle}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyTasksDescription}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}