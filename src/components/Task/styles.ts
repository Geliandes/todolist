import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    position: 'relative',
  },
  checkboxIcon: {
    margin: 4,
    borderRadius: 9999,
  },
  checkIcon: {
    position: 'absolute',
    top: 9,
    left: 9,
  },
  taskTitle: {
    color: '#F2F2F2',
    fontSize: 16,
    flex: 1,
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  deleteIcon: {
    padding: 9,
  },
});
