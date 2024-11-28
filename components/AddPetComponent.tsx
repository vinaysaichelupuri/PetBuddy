import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
const styles = StyleSheet.create({
    mainContainer:{
        height:50,
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    image:{
        height:30,
        width:30,
        marginLeft:10,
        marginRight:15
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#32CD32",
        marginRight:30,
        padding:10,
        borderRadius:20
    },
    text:{
        fontSize:20,
        fontFamily:"bold",
        fontWeight:"700"
    }


})

