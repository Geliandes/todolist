import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  emptyTasksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#333333',
    paddingVertical: 48,
    paddingHorizontal: 20,
    gap: 16
  },
  emptyTasksImage: {
    width: 56,
    height: 56,
  },
  emptyTasksTitle: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: '#808080',
    textAlign: 'center',
    lineHeight:  20,
  },
  emptyTasksDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#808080',
    textAlign: 'center',
    lineHeight:  20,
  }
})