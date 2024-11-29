import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ServicesTypes } from '../components/ServicesTypes'
import { ServicesData } from '../components/ServicesData'

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
const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  textBox:{
    height:90,
    width:'100%',
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontFamily:"bold",
    fontWeight:"700",
    fontSize:20
  }
})
