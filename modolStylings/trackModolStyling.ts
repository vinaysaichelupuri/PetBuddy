import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 15,
      paddingVertical: 10,
      paddingHorizontal: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 10,
    },
    optionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderColor: '#E0E0E0',
    },
    optionText: {
      flex: 1,
      fontSize: 18,
      color: '#000',
      marginLeft: 10,
    },
  
  });