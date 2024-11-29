import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useGlobalContext } from '../context/GlobalContext';

export function ServicesData() {
  const { data } = useGlobalContext();

  return data.length === 0 ? (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText} testID='headerText'>Please select the category</Text>
    </View>
  ) : (
    <ScrollView>
      {data.map((item: any, index: number) => (
        <View key={index} style={styles.card}>
          <View style={styles.headerContainer}>
            <Image source={{ uri: item.photo }} style={styles.image} testID='image'/>
            <View style={styles.headerTextContainer}>
              <Text style={styles.name} testID='name'>{item.name}</Text>
              <Text style={styles.study} testID='study'>{item.study}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText} testID='rating'>⭐ {item.rating}</Text>
                <Text style={styles.reviews} testID='reviews'>({item.numberOfReviews} reviews)</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText} testID='experince'>{item.experience} years of experience</Text>
            <Text style={styles.detailText} testID='distance'>📍 {item.distance} km</Text>
            <Text style={styles.detailText} testID='price'>💲 {item.price}</Text>
          </View>
          <Text style={styles.availabilityText} testID='available'>{item.available}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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