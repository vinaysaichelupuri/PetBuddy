import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Footer() {
  return (
    <View style = {styles.container}>
      <Text testID='text'>© All Rights Reserved to PedBuddy - 2022</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#32CD32",
        height:60,
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})
