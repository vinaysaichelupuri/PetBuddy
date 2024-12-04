import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    dogImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    textContainer: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 20,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height:"20%"
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333333',
      textAlign: 'center',
      marginBottom: 10,
    },
    descriptionText: {
      fontSize: 16,
      color: '#888888',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
    },
    buttonIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
  });