import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { styles } from '../componentStyling/FooterStyling';
export function Footer() {
  return (
    <View style = {styles.container}>
      <Text testID='text'>© All Rights Reserved to PedBuddy - 2022</Text>
    </View>
  );
}
