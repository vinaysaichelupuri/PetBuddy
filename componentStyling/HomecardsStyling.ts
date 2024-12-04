import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    noPet: {
      justifyContent: 'center',
      alignItems: 'center',
      height:"70%"

    },
    noPetImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    noPetText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 10,
    },
    petList: {
      backgroundColor: 'lightgreen', 
      height:"73%"
    },
    petCard: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      margin: 10,
      borderRadius: 15,
      padding: 10,
      alignItems: 'center',
      elevation: 4, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    petImage: {
      width: 200,
      height: 280,
      borderRadius: 15,
      marginRight: 15,
    },
    petNameContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    petName: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 5,
    },
    petBreed: {
      fontSize: 20,
      color: '#666',
    },
  });