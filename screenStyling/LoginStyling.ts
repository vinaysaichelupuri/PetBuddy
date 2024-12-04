import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 250,
      height: 250,
      marginBottom: 20,
    },
    input: {
      width: 350,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    register: {
      marginTop: 20,
    },
    registerText: {
      color: '#007bff',
    },
    footerContainer: {
      marginTop: 20,
      width:"100%",
    },
    loadingImage:{
      height:915,
      width:450
    }
  });
  