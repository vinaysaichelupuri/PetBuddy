import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      height: 110,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#32CD32',
      alignItems: 'flex-end',
    },
    image: {
      height: 25,
      width: 25,
      marginRight: 20,
      marginBottom: 10,
      borderRadius: 10,
    },
    name: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'bold',
      marginBottom: 15,
      marginLeft: 20,
      fontWeight:"600"
    },
  });