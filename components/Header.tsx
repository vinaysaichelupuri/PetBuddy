import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { styles } from '../componentStyling/HeaderStyling'

export function Header() {
  return (
    <View>
        <Image source={require('../public/assets/headerLogin.png')} style={styles.headerLogin} testID='image'/>
      </View>
  )
}



  
