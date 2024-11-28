import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export function Header() {
  return (
    <View>
        <Image source={require('../public/assets/headerLogin.png')} style={styles.headerLogin} testID='image'/>
      </View>
  )
}


const styles = StyleSheet.create({
    headerLogin: {
      height: 100,
      width: 450,
    },
  });
  
