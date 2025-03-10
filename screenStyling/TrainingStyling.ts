import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: 'lightgreen',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      padding: 15,
      margin: 10,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
    image: {
      width: 100,
      height: 100,
    },
    content: {
      paddingHorizontal: 10,
    },
    step: {
      fontSize: 16,
      color: '#333',
      marginBottom: 8,
    },
    link: {
      fontSize: 16,
      color: '#1e90ff',
      marginTop: 10,
      textDecorationLine: 'underline',
    },
  });