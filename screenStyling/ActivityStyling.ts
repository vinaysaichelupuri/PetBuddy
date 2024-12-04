import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      padding: 16,
    },
  
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: '#63B151',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#fff',
    },
  
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    tabButton: {
      backgroundColor: '#63B151',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 20,
    },
    tabText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
  
    remindersContainer: {
      backgroundColor: '#fff',
      marginVertical: 10,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    reminderTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    reminderText: {
      fontSize: 14,
      color: '#777',
    },

    message:{
        height:40,
        width:40
    },
    dog:{
        height:40,
        width:40,
        borderRadius:50
    }
  });