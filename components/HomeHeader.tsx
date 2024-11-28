import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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

const styles = StyleSheet.create({
    container:{
        height:110,
        width:'100%',
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#32CD32",
        alignItems:"flex-end",
        justifyContent:"space-between"
    },
    image:{
        height:50,
        width:50,
        marginRight:20,
        marginBottom:10,
        borderRadius:10
    },
    name:{
        color:"white",
        fontSize:18,
        fontFamily:"bold",
        marginBottom:30,
        marginLeft:20,
        fontWeight:"500"
    }
})