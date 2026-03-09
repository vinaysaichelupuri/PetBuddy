import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../componentStyling/HomeHeaderStyling'

export function HomeHeader({navigation}:{navigation:any}) {
    const handleProfile = ()=>{
        navigation.navigate('Profile')
    }
    const {username} = useGlobalContext()
  return (
    <View style={styles.container}>
        <Text style={styles.name} testID='name'>
            Hey {username}, 
        </Text>
        <TouchableOpacity onPress={handleProfile} testID='handleProfile'>
            <Image source={require('../public/assets/homeUser.png')} style={styles.image} testID='image'/>
        </TouchableOpacity>
    </View>
  )
}
