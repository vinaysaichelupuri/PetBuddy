import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ServicesTypes } from '../components/ServicesTypes'
import { ServicesData } from '../components/ServicesData'
import { styles } from '../screenStyling/ServiceStyling'

export function Services() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textBox}>
      <Text style={styles.text} testID='text'>
            Hello, How may I help you ?
          </Text>
      </View>
          
          <ServicesTypes />
          <ServicesData />
    </View>
  )
}

