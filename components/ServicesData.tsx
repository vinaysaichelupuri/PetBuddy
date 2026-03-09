import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useGlobalContext } from '../context/GlobalContext';
import { styles } from '../componentStyling/ServiceDataStyling';

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

