import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#4CAF50',
      borderRadius: 10,
      padding: 20,
      width: '80%',
      alignSelf: 'center',
      alignItems: 'center',
    },
    crossIcon: {
      width: 20,
      height: 20,
      alignSelf: 'flex-end',
    },
    input: {
      height: 50,
      borderColor: 'gray',
      marginBottom: 15,
      padding: 10,
      width: '100%',
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      fontSize: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addReminderButton: {
      height: 50,
      width: '100%',
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    addReminderButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });