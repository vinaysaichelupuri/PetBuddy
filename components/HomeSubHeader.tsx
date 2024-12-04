import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { styles } from '../componentStyling/HomeSubHeaderStyling';

export function HomeSubHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../public/assets/paw.png')} style={styles.image} testID='image'/>
      <Text style={styles.text} testID='name'>My Pets</Text>
    </View>
  );
}
