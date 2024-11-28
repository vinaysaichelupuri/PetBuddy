import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export function HomeSubHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../public/assets/paw.png')} style={styles.image} testID='image'/>
      <Text style={styles.text} testID='name'>My Pets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        height:50,
        width:"100%",
        borderRadius:20,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'#fff',
        marginTop:10,

    },
    image:{
        height:30,
        width:30,
        marginLeft:20,
        marginRight:30
    },
    text:{
        fontSize:20,
        fontFamily:"bold",
        fontWeight:"800"
    }
})

