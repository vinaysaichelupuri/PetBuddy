import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useGlobalContext } from '../context/GlobalContext';

export function ServicesTypes() {
    const{ setData} = useGlobalContext()
    const [veternityData,setVeternityData] = useState([]);
    const [groomingData,setGroomingData] = useState([]);
    const[boardingData,setBoardingData] = useState([]);
    const[trainingData,setTrainingData] = useState([]);
    

useEffect(()=>{
    const getData= async ()=>{
        const response = await axios.get('http://localhost:5001/api/doctorData')
        const details1 = await response.data
        setVeternityData(details1)
        const response1 = await axios.get('http://localhost:5001/api/groomingData')
        const details2 = await response1.data
        setGroomingData(details2)
        const response2 = await axios.get('http://localhost:5001/api/boardingData')
        const details3 = await response2.data
        setBoardingData(details3)
        const response3 = await axios.get('http://localhost:5001/api/trainingData')
        const details4 = response3.data
        setTrainingData(details4)
    }
    getData()
},[])

  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.subContainer} onPress={()=>{setData(veternityData)}} testID='veternity'>
            <Image source={require('../public/assets/vet.png')} style={styles.image} testID='image1'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer} onPress={()=>{setData(groomingData)}} testID='grooming'>
            <Image source={require('../public/assets/grooming.png')} style={styles.image} testID='image2'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer} onPress={()=>setData(boardingData)} testID='boarding'>
            <Image source={require('../public/assets/animals.png')} style={styles.image} testID='image3'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer} onPress={()=>{setData(trainingData)}} testID='training'>
            <Image source={require('../public/assets/trainingImage.png')} style={styles.image} testID='image4'/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
mainContainer:{
    height:80,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly"
},
subContainer:{
    backgroundColor:"lightgrey",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15 ,
    height:60,
    width:60
},
image:{
    height:40,
    width:40
}
})
