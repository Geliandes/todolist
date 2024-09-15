import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    gap: 32,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    gap: 4,
    marginTop: -27,
    paddingHorizontal: 24
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 0,
    color: '#F2F2F2',
    fontSize: 16,
    borderColor: '#0D0D0D',
    borderWidth: 1,
  },
  inputFocused: {
    borderColor: '#5E60CE'
  },
  addTaskButton: {
    backgroundColor: '#1E6F9F',
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  addTaskButtonPressed: {
    backgroundColor: '#4EA8DE',
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 32,
  },
  taskCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  taskCountTitle: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
  },
  taskCountCounter: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    color: '#D9D9D9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 999,
  },
  tasksContainer: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 20,
    flex: 1
  },
  tasksList: {
    gap: 8
  }
})