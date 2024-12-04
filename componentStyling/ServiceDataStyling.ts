import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 16,
      color: '#666',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding:30,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTextContainer: {
      marginLeft: 10,
      flex: 1,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    study: {
      fontSize: 14,
      color: '#888',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    ratingText: {
      fontSize: 16,
      color: '#FFD700',
    },
    reviews: {
      fontSize: 14,
      color: '#666',
      marginLeft: 5,
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    detailText: {
      fontSize: 14,
      color: '#555',
    },
    availabilityText: {
      fontSize: 14,
      color: '#555',
      marginTop: 10,
      textAlign: 'left',
    },
  });