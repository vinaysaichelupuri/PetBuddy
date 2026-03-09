import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../componentStyling/AddPetStyling'

export function AddPetComponent({navigation}:{navigation:any}) {
    const handleAddPet=()=>{
        navigation.navigate('AddPet')
    }
  return (
<View style={styles.mainContainer}>
    <TouchableOpacity onPress={handleAddPet} style={styles.subContainer} testID='handlePet'>
        <Image source={require('../public/assets/paw.png')} style={styles.image} testID='image'/>
        <Text style={styles.text} testID='text'>
            Add Pet
        </Text>
    </TouchableOpacity>
</View>
  )
}


