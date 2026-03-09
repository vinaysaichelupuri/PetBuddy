import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 16,
      position:"relative"
    },
    petImage: {
      width: '100%',
      height: 350,
      borderRadius: 16,
    },
    infoContainer: {
      backgroundColor: '#f9f9f9',
      padding: 16,
      borderRadius: 16,
      margin: 16,
    },
    petName: {
      fontSize: 28,
      fontWeight: '800',
      color: '#333',
      marginBottom: 8,
      fontFamily: 'bold',
    },
    breedGenderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      justifyContent: 'space-between',
    },
    breedName: {
      fontSize: 22,
      fontWeight: '800',
      color: 'forestgreen',
      marginBottom: 8,
      fontFamily: 'bold',
    },
    genderIcon: {
      width: 24,
      height: 24,
    },
    detailsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#f9f9f9',
      borderRadius: 16,
      height: '10%',
    },
    detailItem: {
      width: '23%',
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90%',
      borderRadius: 20,
    },
    detailLabel: {
      fontSize: 20,
      color: 'balck',
    },
    detailValue: {
      fontSize: 16,
      fontWeight: '500',
      color: 'forestgreen',
    },
    remarksContainer: {
      marginBottom: 16,
      padding: 16,
    },
    remarksLabel: {
      fontSize: 20,
      fontWeight: '800',
      color: '#333',
    },
    remarksText: {
      fontSize: 18,
      color: '#555',
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
      width:"30%"
    },
    buttonText: {
      fontSize: 16,
      color: '#333',
    },
    trackButton: {
      backgroundColor: '#4CAF50',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      width:"30%"
    },
    trackButtonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },
    petNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'forestgreen',
      marginBottom: 8,
    },
    buttonContainer:{
      width:"100%",
      height:"5%",
      justifyContent:"flex-start"
    },
    trackButtonContainer:{
      width:"100%",
      height:"5%",
      justifyContent:"center",
      alignItems:"center"
    },
    backarrow:{
      height:30,
      width:30,
      position:"absolute",
      marginTop:"15%",
      alignSelf:"flex-start",
      marginLeft:"2%"
      
    }
  });
  